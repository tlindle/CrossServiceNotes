const basicAuthValidation = require('./basicAuthValidation');

jest.mock('../util/logger');

describe('auth', () => {
  describe('basicAuthValidation', () => {
    it('isValid = true for good username and password', () => {
      const actualResult = basicAuthValidation('blah', 'crossChurch', 'crossPass');
      const expectedResult = {
        isValid: true,
        credentials: {
          id: '1111aaaa',
          name: 'crossChurch',
        },
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('isValid = false and credentials = null for bad username', () => {
      const actualResult = basicAuthValidation('blah', 'crossedChurch', 'crossPass');
      const expectedResult = {
        isValid: false,
        credentials: null,
      };

      expect(actualResult).toEqual(expectedResult);
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

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
