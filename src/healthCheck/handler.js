const moduleInfo = require('../../package.json');
const logger = require('../util/logger');

const healthCheckHandler = (request, h) => {
  logger.info('Health check route called');
  return h.response(`${moduleInfo.name} ${moduleInfo.version} is online`).code(200);
};

module.exports = healthCheckHandler;
