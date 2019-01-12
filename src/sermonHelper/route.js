const joi = require('joi');
const sermonHelperHandler = require('./handler');

const sermonHelperRoute = {
  method: 'GET',
  path: '/sermonHelper',
  handler: sermonHelperHandler,
  config: {
    tags: ['api'],
    validate: {
      query: {
        date: joi.string().isoDate().options({ convert: false }).required(),
      },
    },
  },

};

module.exports = {
  sermonHelperRoute,
  routes: [sermonHelperRoute],
};
