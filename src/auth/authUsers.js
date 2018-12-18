const envConfig = require('../util/envConfig');

const env = envConfig.getEnv();
const secretsPath = envConfig.getSecretsPath(env);
const secrets = envConfig.getSecrets(secretsPath);

const authUsers = {
  crossChurch: {
    username: 'crossChurch',
    password: secrets.crossChurchPass,
    name: 'crossChurch',
    id: '1111aaaa',
  },
};

module.exports = authUsers;
