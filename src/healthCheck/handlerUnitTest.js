const healthCheckHandler = require('./handler');
const moduleInfo = require('../../package.json');

jest.mock('../util/logger');

describe('healthCheck', () => {
  describe('handler', () => {
    it('returns the module name and version', () => {
      const h = {
        response: res => ({
          code: (statusCode) => {
            expect(statusCode).toEqual(200);
            return res;
          },
        }),
      };

      const actualResult = healthCheckHandler('blah', h);
      const expectedResult = `${moduleInfo.name} ${moduleInfo.version} is online`;

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
