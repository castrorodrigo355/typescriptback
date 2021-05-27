// import User from "../schema/user";
import Event from "../schema/event";
import { IEventResponse } from "../interface/event";

export default class EventDao {

    async registerEvent(body: any): Promise<IEventResponse> {
        const { title, description, date, user } = body;
        try {
            const eventSearch = await Event.findOne({ title });
            if (eventSearch) {
                return {
                    ok: false,
                    status: 402,
                    response: "This event is already created."
                }
            }

            const event = new Event({ title, description, date, user });
            await event.save();

            return {
                ok: true,
                status: 201,
                response: event._id
            }

        } catch (error) {
            return {
                ok: false,
                status: 500,
                response: "Error. Try later please."
            }
        }
    }

    public getEvents = async (): Promise<IEventResponse> => {
        try {
            const events = await Event.find();
            return {
                ok: true,
                response: events,
                status: 200
            };
        } catch (error) {
            return {
                ok: false,
                response: null,
                status: 500
            };
        }
    }

}