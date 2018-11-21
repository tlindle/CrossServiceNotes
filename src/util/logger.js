const winston = require('winston');
const LogzioWinstonTransport = require('winston-logzio');
const env = require('./envConfig');
const { logzSecrets } = require('.//secretsConfig');

const transports = (env === 'prod')
  ? new LogzioWinstonTransport({
    level: 'info',
    name: 'winston_logzio',
    token: logzSecrets.logzApiToken,
  })
  : new winston.transports.Console();

const logger = winston.createLogger({ transports });

module.exports = logger;
