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
 * Table class for storing schedules. Rows represent a possible schedule.
 */
class Schedules extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'schedule');
	}

	/**
	 * Create an SQL create table command for the schedule table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id        int(11) NOT NULL AUTO_INCREMENT, 
  `tag`     varchar(32) NOT NULL, 
  name      varchar(100) NOT NULL, 
  teamingid int(11), 
  semester  char(4) NOT NULL, 
  section   char(4) NOT NULL, 
  PRIMARY KEY (id), 
  INDEX (`tag`));

SQL;

		return $query;
	}

	/** Get all schedules for a given section
	 * @param string $semester The semester code, like FS18
	 * @param string $sectionId The id for the section (like 001)
	 * @return array of Schedule objects
	 */
	public function getBySection($semester, $sectionId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where semester=? and section=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$semester, $sectionId]);

		$result = array();
		while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$result[] = new Schedule($row);
		}

		return $result;
	}

	/** Get a schedule for a section.
	 * @param string $semester The semester code, like FS18
	 * @param string $sectionId The id for the section (like 001)
	 * @return Schedule object or null
	 */
	public function get($semester, $sectionId, $tag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where semester=? and section=? and tag=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$semester, $sectionId, $tag]);

		if(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			return new Schedule($row);
		}

		return null;
	}

	/** Get a schedule for a section.
	 * @param string $semester The semester code, like FS18
	 * @param string $sectionId The id for the section (like 001)
	 * @return Schedule object or null
	 */
	public function getById($scheduleId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where id=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$scheduleId]);

		if(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			return new Schedule($row);
		}

		return null;
	}

	/** Add a new schedule
	 * @param Schedule $schedule Schedule to add (from record)
	 * @return int ID of new record or null if insert failed
	 */
	public function add(Schedule $schedule) {
		$pdo = $this->pdo();

		$sql = <<<SQL
insert into $this->tablename(tag, name, semester, section, teamingid)
values(?, ?, ?, ?, ?);
SQL;

		//echo $this->sub_sql($sql, array($tag, $name, $semester, $sectionid));

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$schedule->tag, $schedule->name, $schedule->semester, $schedule->sectionId,
				$schedule->teamingId]);
			$schedule->id = $pdo->lastInsertId();
			return $schedule->id;
		} catch(\PDOException $e) {
			return null;
		}
	}

	/** Update a schedule record
	 * @param Schedule $schedule Schedule to update (from record)
	 * @return true if successful, false otherwise
	 */
	public function update(Schedule $schedule) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename
set tag=?, name=?, teamingid=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$schedule->tag, $schedule->name, $schedule->teamingId, $schedule->id]);
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
}
