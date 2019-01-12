const envConfig = require('./envConfig');
const secrets = require('../../secrets/cc-api-secrets.json');

describe('util', () => {
  describe('envConfig', () => {
    describe('getEnv', () => {
      afterAll(() => {
        process.env.NODE_ENV = 'test';
      });
      it('should return the correct env', () => {
        process.env.NODE_ENV = 'test';
        expect(envConfig.getEnv()).toEqual('test');
        process.env.NODE_ENV = 'dev';
        expect(envConfig.getEnv()).toEqual('dev');
        process.env.NODE_ENV = 'prod';
        expect(envConfig.getEnv()).toEqual('prod');
        process.env.NODE_ENV = 'NOT AN ENVIRONMENT';
        expect(envConfig.getEnv()).toEqual('test');
      });
    });

    describe('getSecretsPath', () => {
      it('should return the correct secrets path', () => {
        expect(envConfig.getSecretsPath('test')).toEqual('../../secrets');
        expect(envConfig.getSecretsPath('dev')).toEqual('/secrets');
        expect(envConfig.getSecretsPath('prod')).toEqual('/secrets');
      });
    });

    describe('getSecrets', () => {
      it('should return the correct secrets', () => {
        expect(envConfig.getSecrets('../../secrets')).toEqual(secrets);
      });
    });

    describe('getConfig', () => {
      it('should return the correct config', () => {
        expect(envConfig.getConfig('test')).toEqual({
          db: {
            mongo: {
              uriPrefix: 'mongodb+srv://',
              host: 'cross0-uhq5j.gcp.mongodb.net',
              database: 'cross',
            },
          },
        });
        expect(envConfig.getConfig('dev')).toEqual({
          db: {
            mongo: {
              uriPrefix: 'mongodb+srv://',
              host: 'cross0-uhq5j.gcp.mongodb.net',
              database: 'cross',
            },
          },
        });
      });
    });
  });
});
