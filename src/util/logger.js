const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'CrossServiceNotes' });

module.exports = logger;
