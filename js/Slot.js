/**
 * Represents a single slot in the schedule.
 * @param data Optional data to load into the object.
 * @constructor
 */
export const Slot = function(data) {
	if(data !== undefined) {
		this.id = data.id;
		this.time = data.time;
		this.duration = data.duration;
		this.updated = data.updated;
		this.location = data.location;

		this.teamId = data.teamId;
		this.teamName = data.teamName;
		this.memberId = data.memberId;
	} else {
		this.id = 0;
		this.time = 0;
		this.duration = 10;
		this.updated = 0;
		this.location = '';

		this.teamName = null;
		this.teamId = null;
		this.memberId = null;
	}

	// Does this slot repeat?
	this.repeat = 1;

	// Is this slot contiguous with the previous slot?
	this.contiguous = false;

	// Is this slot checked?
	this.checked = false;

	this.clone = function() {
		return new Slot(this);
	}

	this.booked = function() {
		return this.teamId !== null || this.memberId !== null;
	}
}
