import { Router } from 'express';
import EventController from '../controllers/event';

export default class EventRouter {

    public router: Router;
    public eventController: EventController;

    constructor() {
        this.router = Router();
        this.eventController = new EventController();
        this.eventConfig();
    }

    public async eventConfig() {
        this.router.post('/', this.eventController.registerEvent);
        this.router.get('/', this.eventController.getEvents);
        // this.router.get("/renew", this.authController.revalidateToken);
    }

}