import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes.js';

const server = express();

server.use(morgan('tiny'));

server.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);

server.use(express.json());

server.use('/api', router);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
