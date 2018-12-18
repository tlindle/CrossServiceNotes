const winston = require('winston');
const LogzioWinstonTransport = require('winston-logzio');
const envConfig = require('./envConfig');

const env = envConfig.getEnv();
const secretsPath = envConfig.getSecretsPath(env);
const secrets = envConfig.getSecrets(secretsPath);

const transports = (env === 'prod')
  ? new LogzioWinstonTransport({
    level: 'info',
    name: 'winston_logzio',
    token: secrets.logzApiToken,
  })
  : new winston.transports.Console();

const logger = winston.createLogger({ transports });

module.exports = logger;
