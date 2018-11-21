<?php
/**
 * @file
 * Representation of a single Schedule
 */

namespace CL\Scheduler;

/**
 * Representation of a single Schedule
 *
 * @cond
 * @property int $id
 * @property string $semester
 * @property string $sectionId
 * @property string $tag
 * @property string $name
 * @property int $teamingId
 * @endcond
 */
class Schedule {

	public function __construct(array $row = null) {
		if($row !== null) {
			$this->id = +$row['id'];
			$this->tag = $row['tag'];
			$this->name = $row['name'];
			$this->semester = $row['semester'];
			$this->sectionId = $row['section'];
			$this->teamingId = $row['teamingid'];
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

			case 'tag':
				return $this->tag;

			case 'name':
				return $this->name;

			case 'semester':
				return $this->semester;

			case 'sectionId':
				return $this->sectionId;

			case 'teamingId':
				return $this->teamingId;

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

			case 'tag':
				$this->tag = $value;
				break;

			case 'name':
				$this->name = $value;
				break;

			case 'semester':
				$this->semester = $value;
				break;

			case 'sectionId':
				$this->sectionId = $value;
				break;

			case 'teamingId':
				$this->teamingId = $value;
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

	public function data() {
		return [
			'id'=>$this->id,
			'tag'=>$this->tag,
			'name'=>$this->name,
			'semester'=>$this->semester,
			'section'=>$this->sectionId,
			'teaming'=>$this->teamingId];
	}

	private $id=0;    // Internal team ID
	private $tag = '';   // Teaming tag
	private $name = '';  // Teaming name
	private $semester = null;  // Semester, like 'FS18'
	private $sectionId = null; // SectionID, like '003'
	private $teamingId = true;    // Is this team visible to user
}