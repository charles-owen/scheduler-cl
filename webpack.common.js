const path = require('path');

module.exports = {
	entry: {
		Scheduler: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		}
	}
}
