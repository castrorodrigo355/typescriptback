import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import UserRouter from './routers/user';
import AuthRouter from './routers/auth';
import { configApp } from './config/config';

export default class Server {

    public app: express.Application;
    public routerAuthInstance = new AuthRouter();
    public routerUserInstance = new UserRouter();

    constructor() {
        this.app = express();
        this.settingsConfig();
        this.routersConfig();
    }

    settingsConfig(): void {
        /* SETTINGS */
        this.app.set("port", configApp.port);
        /* MIDDLEWARES */
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routersConfig(): void {
        /* ROUTES */
        this.app.use("/auth", this.routerAuthInstance.router);
        this.app.use("/users", this.routerUserInstance.router);
    }

    execute(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server listen ${this.app.get("port")}`);
        })
    }
}
