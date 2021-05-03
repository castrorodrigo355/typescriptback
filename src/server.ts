import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import UserRouter from './routers/user';
import AuthRouter from './routers/auth';
import { configApp } from './config/config';

class Server {

    private app: express.Application;
    private routerAuthInstance: AuthRouter;
    private routerUserInstance: UserRouter;

    constructor() {
        this.app = express();
        this.routerAuthInstance = new AuthRouter();
        this.routerUserInstance = new UserRouter();
        this.settingsConfig();
        this.routersConfig();
    }

    settingsConfig() {
        /* SETTINGS */
        this.app.set("port", configApp.port);
        /* MIDDLEWARES */
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routersConfig() {
        /* ROUTES */
        this.app.use("/auth", this.routerAuthInstance.router);
        this.app.use("/users", this.routerUserInstance.router);
    }

    execute() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server listen ${this.app.get("port")}`);
        })
    }
}

export default Server;