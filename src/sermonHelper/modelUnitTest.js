const { MongoClient } = require('mongodb');
const model = require('./model');

jest.mock('mongodb');

const mockFind = jest.fn();
MongoClient.connect.mockResolvedValue({
  db: jest.fn().mockResolvedValue({
    collection: jest.fn().mockReturnValue({
      find: mockFind,
    }),
  }),
});

describe('sermonHelper', () => {
  describe('model', () => {
    describe('getSermonHelperData', () => {
      it('should resolve what find resolves', async () => {
        mockFind.mockReturnValue({
          toArray: jest.fn().mockResolvedValue('RESULTS!'),
        });
        expect(await model.getSermonHelperData('blah')).toEqual('RESULTS!');
      });

      it('should fail if find fails', async () => {
        expect.assertions(1);
        mockFind.mockReturnValue({
          toArray: jest.fn().mockRejectedValue('FIND FAILED!'),
        });
        try {
          await model.getSermonHelperData('blah');
        } catch (e) {
          expect(e).toEqual('FIND FAILED!');
        }
      });
    });
  });
});
