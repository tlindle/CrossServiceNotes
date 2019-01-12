const sermonHelperRoute = require('./route');

describe('sermonHelper', () => {
  describe('route', () => {
    it('config has correct attributes', () => {
      expect(sermonHelperRoute.sermonHelperRoute.config.tags).toEqual(['api']);
      expect(sermonHelperRoute.sermonHelperRoute.config.validate.query).toHaveProperty('date');
    });
  });
});
