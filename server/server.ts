import express, { Application } from 'express';
import cors from 'cors';

import userRouter from '../controllers/users/userRoutes';
import msSQLDb from '../db/connect';

class Server
{
    private app: Application;
    private port: string;
    private endPoints = 
    {
        users: '/api/users'
    }

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.middlewares();
        this.connectDb();
        this.routes();
    }

    public async connectDb()
    {
        try 
        {
            await msSQLDb.authenticate();
            console.log('DB ON');
        } catch (error) 
        {
            throw new Error(`${error}`);    
        }
    }

    public routes()
    {
        this.app.use(this.endPoints.users, userRouter);
    }

    public middlewares()
    {
        this.app.use(cors());
        this.app.use(express.json());
    }

    public listen()
    {
        this.app.listen(this.port, ()=>
        {
            console.log('Server init on port ' + this.port);
        });
    }
}

export default Server;