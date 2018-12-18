/* eslint-disable global-require */
const getEnv = () => ((process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev')
  ? process.env.NODE_ENV : 'test');

const getSecretsPath = env => ((env === 'test') ? '../../secrets' : '/secrets');

const getSecrets = secretsPath => require(`${secretsPath}/cc-orchestration-secrets.json`);

module.exports = {
  getEnv,
  getSecretsPath,
  getSecrets,
};
