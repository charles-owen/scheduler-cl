/**
 * Object the represents a schedule
 * @param data
 * @constructor
 */
export const Schedule = function(data) {
	if(data !== undefined) {
		this.id = data.id;
		this.tag = data.tag;
		this.name = data.name;
		this.teaming = data.teaming;
		this.assigntag = data.assigntag === null ? 'none' : data.assigntag;
	} else {
		this.id = 0;
		this.tag = '';
		this.name = '';
		this.teaming = 0;
		this.assigntag = 'none';
	}

	this.clone = function() {
		return new Schedule(this);
	}
}