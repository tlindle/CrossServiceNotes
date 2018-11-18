const env = (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev')
  ? process.env.NODE_ENV : 'test';

module.exports = env;
