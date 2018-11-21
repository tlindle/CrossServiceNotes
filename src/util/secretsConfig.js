const env = require('./envConfig');

const secretsPath = (env === 'test') ? '../../secrets' : '/secrets';
const logzSecrets = require(`${secretsPath}/logzSecrets.json`);
const basicAuthSecrets = require(`${secretsPath}/serviceNotesBasicAuthSecrets.json`);

module.exports = {
  logzSecrets,
  basicAuthSecrets,
};
