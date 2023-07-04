import dotenv from 'dotenv';
import Server from './models/server.model';

dotenv.config();

const server: Server = new Server();

server.listen();
