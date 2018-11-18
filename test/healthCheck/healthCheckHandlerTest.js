const assert = require('assert');
const sinon = require('sinon');

const healthCheckHandler = require('../../src/healthCheck/healthCheckHandler');
const moduleInfo = require('../../package.json');
const logger = require('../../src/util/logger');

describe('healthCheck', () => {
  describe('healthCheckHandler', () => {
    beforeEach(() => {
      const fakeLogger = sinon.fake.resolves('blah');
      sinon.replace(logger, 'info', fakeLogger);
      sinon.replace(logger, 'error', fakeLogger);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('returns the module name and version', () => {
      const h = {
        response: res => ({
          code: (statusCode) => {
            assert.equal(statusCode, 200);
            return res;
          },
        }),
      };

      const actualResult = healthCheckHandler('blah', h);
      const expectedResult = `${moduleInfo.name} ${moduleInfo.version} is online`;

      assert.equal(actualResult, expectedResult);
    });
  });
});
