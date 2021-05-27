import { Document } from "mongoose";
import { Schema, mongoose } from "../database/database";
import User from "./user";

export interface IEvent extends Document {
    title: string;
    description: string;
    date: string;
    user: string;
}

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: User,
        },
    },
    {
        versionKey: false,
    },
);

const Event = mongoose.model<IEvent>("Event", eventSchema);

export default Event;
