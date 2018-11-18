const healthCheckHandler = require('./healthCheckHandler');

const healthCheckRoute = {
  method: 'GET',
  path: '/',
  handler: healthCheckHandler,
  config: {
    tags: ['api'],
    auth: false,
  },
};

module.exports = healthCheckRoute;
