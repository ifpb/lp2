const jsonServer = require('json-server');
// const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
// CORS setting with OPTIONS pre-flight handling
// server.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Authorization, accept, access-control-allow-origin'
//   );

//   if ('OPTIONS' == req.method) res.send(200);
//   else next();
// });
// server.use(
//   cors({
//     origin: '*',
//     methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     preflightContinue: false,
//   })
// );
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
