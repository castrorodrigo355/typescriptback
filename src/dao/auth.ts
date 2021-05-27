import User from "../schema/user";
import { IAuthResponse } from "../interface/auth";
import {
    generateJWT,
    comparePassword,
    generateHashPassword,
} from '../helpers/jwt';

export default class AuthDao {

    async registerUser(body: any): Promise<IAuthResponse> {
        const { name, email, password } = body;
        try {
            const userSearch = await User.findOne({ email });
            if (userSearch) {
                return {
                    ok: false,
                    status: 402,
                    response: "This email is already used."
                }
            }

            const pass = generateHashPassword(password)
            const user = new User({ name, email, password: pass });
            const userSaved = await user.save();
            const token = await generateJWT(userSaved._id, userSaved.name);

            return {
                ok: true,
                status: 201,
                response: token
            }

        } catch (error) {
            return {
                ok: false,
                status: 500,
                response: "Error. Try later please."
            }
        }
    }

    async loginUser(body: any): Promise<IAuthResponse> {
        const { email, password } = body;
        try {
            const user = await User.findOne({ email });
            const validatePass = comparePassword(user.password, password)
            if (!validatePass) {
                return {
                    ok: false,
                    status: 405,
                    response: "Incorrect Password."
                }
            }

            const token = await generateJWT(user._id, user.name);
            return {
                ok: true,
                status: 201,
                response: token
            }

        } catch (error) {
            return {
                ok: false,
                status: 500,
                response: "Error. Try later please."
            }
        }
    }

    async revalidateToken(): Promise<void> {
        // const id = req.id;
        // const name = req.name;
        // const token = await generateJWT(id, name);
        // res.json({
        //     ok: true,
        //     id,
        //     name,
        //     token,
        // });
    }

}