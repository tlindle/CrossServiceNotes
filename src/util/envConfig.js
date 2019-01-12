/* eslint-disable global-require */
const getEnv = () => ((process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev')
  ? process.env.NODE_ENV : 'test');

const getSecretsPath = env => ((env === 'test') ? '../../secrets' : '/secrets');

const getSecrets = secretsPath => require(`${secretsPath}/cc-api-secrets.json`);

const getConfig = env => ({
  test: {
    db: {
      mongo: {
        uriPrefix: 'mongodb+srv://',
        host: 'cross0-uhq5j.gcp.mongodb.net',
        database: 'cross',
      },
    },
  },
  dev: {
    db: {
      mongo: {
        uriPrefix: 'mongodb+srv://',
        host: 'cross0-uhq5j.gcp.mongodb.net',
        database: 'cross',
      },
    },
  },
}[env]);

module.exports = {
  getEnv,
  getSecretsPath,
  getSecrets,
  getConfig,
};
