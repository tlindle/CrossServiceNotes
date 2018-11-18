const logger = require('../util/logger');
const authUsers = require('./authUsers');

const basicAuthValidation = (request, username, password) => {
  const user = authUsers[username];
  if (!user) {
    logger.info(`Unauthorized: ${username} user not found`);
    return { credentials: null, isValid: false };
  }

  const isValid = (password === user.password);
  if (!isValid) {
    logger.info('Unauthorized: Incorrect password');
  }

  const credentials = { id: user.id, name: user.name };
  return { isValid, credentials };
};

module.exports = basicAuthValidation;
