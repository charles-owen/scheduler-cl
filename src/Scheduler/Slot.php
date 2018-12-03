<?php
/**
 * @file
 * Representation of a single Schedule time slot.
 */

namespace CL\Scheduler;

/**
 * Representation of a single schedule time slot
 *
 * @cond
 * @property int $id
 * @property string $scheduleId
 * @property int $time
 * @property int $duration
 * @property string $location
 * @property int $updated
 * @property int $teamId
 * @property int $memberId
 * @endcond
 */
class Slot {
	/**
	 * Slot constructor.
	 * @param array|null $row Database row that represents the slot.
	 */
	public function __construct(array $row = null) {
		if($row !== null) {
			$this->id = +$row['id'];
			$this->scheduleId = +$row['scheduleid'];
			$this->time = strtotime($row['time']);
			$this->duration = +$row['duration'];
			$this->location = $row['location'];
			$this->updated = strtotime($row['updated']);
			$this->teamId = $row['teamid'] !== null ? +$row['teamid'] : null;
			$this->memberId = $row['memberid'] !== null ? +$row['memberid'] : null;
		}
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'id':
				return $this->id;

			case 'scheduleId':
				return $this->scheduleId;

			case 'time':
				return $this->time;

			case 'duration':
				return $this->duration;

			case 'location':
				return $this->location;

			case 'updated':
				return $this->updated;

			case 'teamId':
				return $this->teamId;

			case 'memberId':
				return $this->memberId;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'id':
				$this->id = $value;
				break;

			case 'scheduleId':
				$this->scheduleId = $value;
				break;

			case 'time':
				$this->time = $value;
				break;

			case 'duration':
				$this->duration = $value;
				break;

			case 'location':
				$this->location = $value;
				break;

			case 'updated':
				$this->updated = $value;
				break;

			case 'teamId':
				$this->teamId = $value;
				break;

			case 'memberId':
				$this->memberId = $value;
				break;

			case 'teamName':
				$this->teamName = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Return slot data in a form suitable for transmission to runtime.
	 * @return array Data
	 */
	public function data() {
		return [
			'id'=>$this->id,
			'schedule'=>$this->scheduleId,
			'time'=>$this->time,
			'duration'=>$this->duration,
			'location'=>$this->location,
			'updated'=>$this->updated,
			'teamId'=>$this->teamId,
			'memberId'=>$this->memberId,
			'teamName'=>$this->teamName
		];
	}

	private $id=0;    // Internal slot ID
	private $scheduleId = 0;
	private $time = 0;      ///< Scheduled time
	private $duration = 0;  ///< Slot duration in minutes
	private $location = ''; ///< Slot location
	private $updated = 0;    ///< Time slot was last updated
	private $teamId = null;
	private $memberId = null;
	private $teamName = ''; ///< Team name
}