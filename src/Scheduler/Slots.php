<?php
/**
 * @file
 * Table class for storing schedules. Rows represent a possible schedule.
 */

namespace CL\Scheduler;

use CL\Course\Member;
use CL\Course\Members;
use CL\Users\User;

/**
 * Table class for storing schedule slots. Rows represent a blocks of time.
 */
class Slots extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'slot');
	}

	/**
	 * Create an SQL create table command for the schedule table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id         int(11) NOT NULL AUTO_INCREMENT, 
  scheduleid int(11) NOT NULL, 
  time       datetime NOT NULL, 
  duration   int(11) NOT NULL, 
  updated    datetime NOT NULL, 
  location   varchar(200) NOT NULL, 
  teamid     int(11), 
  memberid   int(11), 
  PRIMARY KEY (id), 
  INDEX (scheduleid), 
  INDEX (updated));

SQL;

		return $query;
	}

	/** Get all schedules for a given section
 * @param int $scheduleId The schedule we need the slots for
 * @return array of Schedule objects
 */
	public function getBySchedule($scheduleId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where scheduleid = ?
order by time
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$scheduleId]);

		$result = array();
		while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$result[] = new Slot($row);
		}

		$this->addTeamNames($result);

		return $result;
	}

	/** Get all a single slot
	 * @param int $slotId Slot we are loading
	 * @return array of Schedule objects
	 */
	public function get($slotId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where id = ?
order by time
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$slotId]);

		if(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$slot = new Slot($row);
		} else {
			return null;
		}

		$this->addTeamNames([$slot]);

		return $slot;
	}

	private function addTeamNames(array $slots) {
		// Are there any specified teams?
		$hasTeams = false;
		foreach($slots as $slot) {
			if($slot->teamId > 0) {
				$hasTeams = true;
				break;
			}
		}

		// Get the team names
		if($hasTeams) {
			$teamsTable = new \CL\Team\Teams($this->config);
			$teamNames = [];

			foreach($slots as $slot) {
				if($slot->teamId > 0) {
					if(!isset($teamNames[$slot->teamId])) {
						$team = $teamsTable->get($slot->teamId);
						$teamNames[$slot->teamId] = $team !== null ?
							$team->name : 'Team ' . $slot->teamId;
					}

					$slot->teamName = $teamNames[$slot->teamId];
				}
			}
		}
	}


	/** Add a new slot
	 * @param Slot $slot Slot to add (from record)
	 * @param int $time Current time
	 * @return int ID of new record or null if insert failed
	 */
	public function add(Slot $slot, $time) {
		$pdo = $this->pdo();

		$slot->updated = $time;

		$sql = <<<SQL
insert into $this->tablename(scheduleid, time, duration, updated, location)
values(?, ?, ?, ?, ?);
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$exec = [$slot->scheduleId, $this->timeStr($slot->time), $slot->duration,
				$this->timeStr($slot->updated),
				$slot->location];

			//echo $this->sub_sql($sql, $exec);

			$stmt->execute($exec);
			$slot->id = $pdo->lastInsertId();
			return $slot->id;
		} catch(\PDOException $e) {
			return null;
		}
	}

	/** Update a schedule record
	 * @param Slot $slot Slot to update (from record)
	 * @param int $time Current time
	 * @return true if successful, false otherwise
	 */
	public function update(Slot $slot, $time) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename
set time=?, duration=?, location=?, updated=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$this->timeStr($slot->time), $slot->duration, $slot->location, $this->timeStr($time), $slot->id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}

	}

	/** Delete a schedule record
	 * @param int $id ID for the record
	 * @return true if successful, false otherwise
	 */
	public function delete($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
delete from $this->tablename
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}
	}

	/**
	 * Does a team have a future booking already?
	 * @param $scheduleId
	 * @param $teamId
	 * @param $time
	 * @return bool
	 */
	public function teamHasBooking($scheduleId, $teamId, $time) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where scheduleid = ? and teamid = ? and time > ?
order by time
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$scheduleId, $teamId, $this->timeStr($time)]);
		return $stmt->rowCount() > 0;
	}

	/**
	 * Does a slot have a future booking already?
	 * @param int $slotId
	 * @return bool True if booked
	 */
	public function slotHasBooking($slotId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where id=? and (memberid is not null or teamid is not null)
order by time
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$slotId]);
		return $stmt->rowCount() > 0;
	}

	/**
	 * Are there fresh schedule items?
	 * @param $scheduleId Schedule to check
	 * @param $after Any updates after this time are fresh
	 * @return bool
	 */
	public function fresh($scheduleId, $after) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where scheduleid=? and updated>?
limit 1
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$scheduleId, $this->timeStr($after)]);
		return $stmt->rowCount() > 0;
	}


	/**
	 * Book a time slot
	 * @param int $id Internal id for the slot
	 * @param User $user User doing the booking
	 * @param int $time Current time
	 * @param int $teamId Team ID or null if individual booking
	 * @return bool true if successful
	 */
	public function book($id, $user, $time, $teamId=null) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename
set memberid=?, teamid=?, updated=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$user->member->id, $teamId, $this->timeStr($time), $id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}
	}


	/**
	 * Clear a time slot booking
	 * @param int $id Internal id for the slot
	 * @param int $time Current time
	 * @return bool True if successful
	 */
	public function unbook($id, $time) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename
set memberid=?, teamid=?, updated=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([null, null, $this->timeStr($time), $id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}
	}
}
