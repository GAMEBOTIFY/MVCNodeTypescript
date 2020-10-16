import MasterRouter from './routers/MasterRouter';
import express from 'express';

/**
 * express server handing class
 * author:Preetham
 */

 class Server{
     public app = express();
     public router = MasterRouter;
 }

 const server =  new Server();

 server.app.use('/api',server.router);