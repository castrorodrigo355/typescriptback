import { config } from "dotenv";
config();

export const configApp = {
    mongoDBURL: process.env.DB_URI,
    port: process.env.LOCAL_SERVER_PORT,
};

export const configRoutes = {
    INITIAL_SERVER_URL: process.env.INITIAL_SERVER_URL,
    SIGNUP_PATH: process.env.PATH_SIGNUP_AUTH,
    SIGNIN_PATH: process.env.PATH_SIGNIN_AUTH,
    USERS_PATH: process.env.PATH_USERS,
    EVENTS_PATH: process.env.PATH_EVENTS,
};