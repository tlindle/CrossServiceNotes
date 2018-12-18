const hapi = require('hapi');
const hapiAuthBasic = require('hapi-auth-basic');
const hapiSwagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');
const cluster = require('cluster');
const numProcessors = require('os').cpus().length;

const moduleInfo = require('../package.json');
const logger = require('./util/logger');
const basicAuthValidation = require('./auth/basicAuthValidation');
const healthCheckRoutes = require('./healthCheck/route').routes;

const server = hapi.server({
  port: 8080,
});

server.route([
  ...healthCheckRoutes,
]);

const swaggerOptions = {
  info: {
    title: 'Cross Church Service Notes API Documentation',
    version: moduleInfo.version,
  },
};

const init = async () => {
  await server.register([
    inert,
    vision,
    hapiAuthBasic,
    {
      plugin: hapiSwagger,
      options: swaggerOptions,
    },
  ]);
  server.auth.strategy('simple', 'basic', { validate: basicAuthValidation });
  server.auth.default('simple');
  await server.start();
};

if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numProcessors; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    logger.info(`Worker ${worker.process.pid} died`);
  });
} else {
  // Initialize hapi server on each worker
  init();
  logger.info(`Worker ${process.pid} started`);
}

process.on('unhandledRejection', (err) => {
  logger.error(`Error: ${err}`);
  process.exit(1);
});
