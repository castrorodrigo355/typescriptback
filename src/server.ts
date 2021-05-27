import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import UserRouter from './routers/user';
import AuthRouter from './routers/auth';
import EventRouter from './routers/event';
import { configApp, configRoutes } from './config/config';

export default class Server {

    public app: express.Application;
    public routerAuthInstance = new AuthRouter();
    public routerUserInstance = new UserRouter();
    public routerEventInstance = new EventRouter();

    constructor() {
        this.app = express();
        this.settingsConfig();
        this.routersConfig();
    }

    settingsConfig(): void {
        this.app.set("port", configApp.port);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routersConfig(): void {
        this.app.use(configRoutes.INITIAL_SERVER_URL, this.routerAuthInstance.router);
        this.app.use(configRoutes.INITIAL_SERVER_URL + configRoutes.USERS_PATH, this.routerUserInstance.router);
        this.app.use(configRoutes.INITIAL_SERVER_URL + configRoutes.EVENTS_PATH, this.routerEventInstance.router);
    }

    execute(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server listen ${this.app.get("port")}`);
        })
    }
}
