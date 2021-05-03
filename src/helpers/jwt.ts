import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const generateJWT = (id: string, name: string) => {
    return new Promise((resolve, reject) => {
        const payload = { id, name };
        const seed = "Eltraidor1";
        jwt.sign(payload, seed, { expiresIn: "2h" },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se pudo generar el token");
                }
                resolve(token);
            },
        );
    });
};

export const generateHashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};

export const comparePassword = (pass: string, password: string) => {
    return bcrypt.compareSync(password, pass);
};
