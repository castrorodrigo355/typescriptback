import User from "../schema/user";
import {
    generateJWT,
    generateHashPassword,
    comparePassword
} from '../helpers/jwt';

class AuthDao {

    constructor() { }

    async registerUser(body: any) {
        const { name, email, password } = body;
        try {
            const userSearch = await User.findOne({ email });
            if (userSearch) {
                return {
                    ok: false,
                    response: "This email is already used."
                }
            }

            const pass = generateHashPassword(password)
            const user = new User({ name, email, password: pass });
            const userSaved = await user.save();
            const token = await generateJWT(userSaved._id, userSaved.name);

            return {
                ok: true,
                user,
                token,
            }

        } catch (error) {
            return {
                ok: false,
                response: "Error. Try later please."
            }
        }
    }

    async loginUser(body: any) {
        const { email, password } = body;
        try {
            const user = await User.findOne({ email });
            const validatePass = comparePassword(password, user.password)
            if (!validatePass) {
                return {
                    ok: false,
                    response: "Incorrect Password."
                }
            }

            const token = await generateJWT(user._id, user.name);
            return {
                ok: true,
                response: token
            }

        } catch (error) {
            return {
                ok: false,
                response: "Error. Try later please."
            }
        }
    }

    async revalidateToken(body: any) {
        // const id = req.id;
        // const name = req.name;
        // const token = await generateJWT(id, name);
        // res.json({
        //     ok: true,
        //     id,
        //     name,
        //     token,
        // });
        return {}
    }

}

export default AuthDao;