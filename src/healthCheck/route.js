const healthCheckHandler = require('./handler');

const healthCheckRoute = {
  method: 'GET',
  path: '/',
  handler: healthCheckHandler,
  config: {
    tags: ['api'],
    auth: false,
  },
};

module.exports = {
  healthCheckRoute,
  routes: [healthCheckRoute],
};
