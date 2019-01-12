const { MongoClient } = require('mongodb');
const envConfig = require('../util/envConfig');

const env = envConfig.getEnv();
const secretsPath = envConfig.getSecretsPath(env);
const secrets = envConfig.getSecrets(secretsPath);
const config = envConfig.getConfig(env);
const mongoUri = `${config.db.mongo.uriPrefix}${secrets.mongoUser}:${secrets.mongoPass}@${config.db.mongo.host}/${config.db.mongo.database}?retryWrites=true`;
let connection = null;
let crossDb = null;

const connectDb = async () => {
  if (!crossDb) {
    connection = await MongoClient.connect(mongoUri, { useNewUrlParser: true, poolSize: 5 });
    crossDb = await connection.db('crossDb');
  }
  return crossDb;
};

const getSermonHelperData = async (date) => {
  const db = await connectDb();
  const sermonHelperCollection = db.collection('sermonHelperCollection');
  return sermonHelperCollection.find({ date }).toArray();
};

module.exports = {
  connectDb,
  getSermonHelperData,
};
