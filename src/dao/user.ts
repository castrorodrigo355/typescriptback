import User from "../schema/user";
import { IUsersResponse, IUserResponse } from '../interface/user';

export default class UserDao {

    public getUsers = async (): Promise<IUsersResponse> => {
        try {
            const users = await User.find();
            return {
                ok: true,
                users: users,
                status: 200
            };
        } catch (error) {
            return {
                ok: false,
                users: null,
                status: 500
            };
        }
    }

    public getUserById = async (id: string): Promise<IUserResponse> => {
        try {
            const user = await User.findById(id);
            if (!user) {
                return {
                    ok: false,
                    user: null,
                    status: 401
                }
            }
            return {
                ok: true,
                user: user,
                status: 200
            }
        } catch (error) {
            return {
                ok: false,
                user: null,
                status: 500
            }
        }
    }

    public deleteUser = async (id: string): Promise<IUserResponse> => {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return {
                    ok: false,
                    user: null,
                    status: 401
                }
            }
            return {
                ok: true,
                user: deletedUser,
                status: 200
            }
        } catch (error) {
            return {
                ok: false,
                user: null,
                status: 500
            }
        }
    }

    public updateUser = async (id: string, body: any): Promise<IUserResponse> => {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, body, {
                new: true,
            });
            if (!updatedUser) {
                return {
                    ok: false,
                    user: null,
                    status: 401
                }
            }
            return {
                ok: true,
                user: updatedUser,
                status: 200
            }
        } catch (error) {
            return {
                ok: false,
                user: null,
                status: 500
            }
        }
    }

}
