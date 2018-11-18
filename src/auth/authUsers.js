const { basicAuthSecrets } = require('../util/secretsConfig');

const authUsers = {
  crossChurch: {
    username: 'crossChurch',
    password: basicAuthSecrets.crossChurchPass,
    name: 'crossChurch',
    id: '1111aaaa',
  },
};

module.exports = authUsers;
