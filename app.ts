import dotenv from 'dotenv';

import Server from "./server/server";

// Dotenv config
dotenv.config();

//Server instance
const server: Server = new Server();

server.listen();