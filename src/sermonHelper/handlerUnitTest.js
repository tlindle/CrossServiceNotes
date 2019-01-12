const sermonHelperHandler = require('./handler');
const model = require('./model');

jest.mock('../util/logger');
jest.mock('./model');

describe('sermonHelper', () => {
  describe('handler', () => {
    it('returns the correct results', async () => {
      const request = {
        query: {
          date: 'blah',
        },
      };

      const h = {
        response: res => ({
          code: (statusCode) => {
            expect(statusCode).toEqual(200);
            return res;
          },
        }),
      };

      model.getSermonHelperData.mockResolvedValue('RESULTS!');
      expect(await sermonHelperHandler(request, h)).toEqual('RESULTS!');
    });
  });
});
