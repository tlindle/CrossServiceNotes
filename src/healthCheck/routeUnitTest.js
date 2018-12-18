const healthCheckRoute = require('./route');

describe('healthCheck', () => {
  describe('route', () => {
    it('auth is set to false', () => {
      expect(healthCheckRoute.healthCheckRoute.config.tags).toEqual(['api']);
      expect(healthCheckRoute.healthCheckRoute.config.auth).toEqual(false);
    });
  });
});
