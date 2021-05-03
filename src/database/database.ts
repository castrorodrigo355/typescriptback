import mongoose from "mongoose";
import { configApp } from "../config/config";
const Schema = mongoose.Schema;

(async () => {
    try {
        const db = await mongoose.connect(configApp.mongoDBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        console.log("Db is connected to " + db.connection.name);
    } catch (error) {
        console.log({ Error: error });
    }
})();

export { Schema, mongoose };
