import EventDao from '../dao/event';

interface IResponse {
    ok: boolean;
    status: number;
    response: string;
}

export default class EventService {

    public eventDao: EventDao;

    constructor() {
        this.eventDao = new EventDao()
    }

    public registerEvent(body: any): Promise<IResponse> {
        return this.eventDao.registerEvent(body)
    }

    public getEvents(): Promise<IResponse> {
        return this.eventDao.getEvents()
    }

}
