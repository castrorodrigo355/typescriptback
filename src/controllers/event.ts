import { Request, Response } from 'express';
import EventService from '../service/event';

export default class EventController {

    public eventService: EventService;

    constructor() {
        this.eventService = new EventService();
    }

    public getEvents = async (req: Request, res: Response): Promise<void> => {
        const { ok, response, status } = await this.eventService.getEvents()
        if (!ok) {
            return res.status(status).json({ Error: null });
        }
        res.status(status).json({ data: response })
    }

    public registerEvent = async (req: Request, res: Response): Promise<void> => {
        const body = req.body;
        const { ok, response, status } = await this.eventService.registerEvent(body);
        if (!ok) {
            return res.status(status).json({ Error: response });
        }
        res.status(status).json({ data: response });
    }

    // public getUserById = async (req: Request, res: Response): Promise<void> => {
    //     const id = req.params.id;
    //     const { ok, user, status } = await this.eventService.getUserById(id)
    //     if (!ok) {
    //         return res.status(status).json({ Error: user });
    //     }
    //     res.status(status).json({ data: user })
    // }

    // public deleteUser = async (req: Request, res: Response): Promise<void> => {
    //     const id = req.params.id;
    //     const { ok, user, status } = await this.eventService.deleteUser(id)
    //     if (!ok) {
    //         return res.status(status).json({ Error: user });
    //     }
    //     res.status(status).json({ data: user })
    // }

    // public updateUser = async (req: Request, res: Response): Promise<void> => {
    //     const id = req.params.id;
    //     const body = req.body;
    //     const { ok, user, status } = await this.eventService.updateUser(id, body)
    //     if (!ok) {
    //         return res.status(status).json({ Error: user });
    //     }
    //     res.status(status).json({ data: user })
    // }

}
