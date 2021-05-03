import { Document } from "mongoose";
import { Schema, mongoose } from "../database/database";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
};

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
