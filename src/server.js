const Hapi = require('@hapi/hapi');
const routers = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes:{
      cors: {
        origin: ['*']
      },
    },
  });

  server.route(routers);
  await server.start();
  console.log('server sedang berjalan', server.info.uri);

};

init();