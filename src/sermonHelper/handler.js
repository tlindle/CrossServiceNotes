const logger = require('../util/logger');
const model = require('./model');

const sermonHelperHandler = async (request, h) => {
  const { date } = request.query;
  logger.info(`Sermon helper route called... date: ${date}`);
  const results = await model.getSermonHelperData(date);
  return h.response(results).code(200);
};

module.exports = sermonHelperHandler;
