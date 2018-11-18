const assert = require('assert');
const sinon = require('sinon');

const logger = require('../../src/util/logger');
const basicAuthValidation = require('../../src/auth/basicAuthValidation');

describe('auth', () => {
  describe('basicAuthValidation', () => {
    beforeEach(() => {
      const fakeLogger = sinon.fake.resolves('blah');
      sinon.replace(logger, 'info', fakeLogger);
      sinon.replace(logger, 'error', fakeLogger);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('isValid = true for good username and password', () => {
      const actualResult = basicAuthValidation('blah', 'crossChurch', 'crossPass');
      const expectedResult = {
        isValid: true,
        credentials: {
          id: '1111aaaa',
          name: 'crossChurch',
        },
      };

      assert.deepEqual(actualResult, expectedResult);
    });

    it('isValid = false and credentials = null for bad username', () => {
      const actualResult = basicAuthValidation('blah', 'crossedChurch', 'crossPass');
      const expectedResult = {
        isValid: false,
        credentials: null,
      };

      assert.deepEqual(actualResult, expectedResult);
    });

    it('isValid = false and credentials = null for bad username', () => {
      const actualResult = basicAuthValidation('blah', 'crossChurch', 'crossedUp');
      const expectedResult = {
        isValid: false,
        credentials: {
          id: '1111aaaa',
          name: 'crossChurch',
        },
      };

      assert.deepEqual(actualResult, expectedResult);
    });
  });
});
