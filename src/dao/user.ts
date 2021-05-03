import User from "../schema/user";

class UserDao {

    async getUsers() {
        try {
            const users = await User.find();
            return {
                ok: true,
                response: users,
            }
        } catch (error) {
            return {
                ok: false,
                response: error,
            }
        }
    }

    async getUserById(id: string) {
        try {
            const user = await User.findById(id);
            if (!user) {
                return {
                    ok: false,
                    response: null
                }
            }
            return {
                ok: true,
                response: user
            }
        } catch (error) {
            return {
                ok: false,
                response: error,
            }
        }
    }

    async deleteUser(id: string) {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return {
                    ok: false,
                    response: null
                }
            }
            return {
                ok: true,
                response: deletedUser
            }
        } catch (error) {
            return {
                ok: false,
                response: error,
            }
        }
    }

    async updateUser(id: string, body: any) {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, body, {
                new: true,
            });
            if (!updatedUser) {
                return {
                    ok: false,
                    response: null
                }
            }
            return {
                ok: true,
                response: updatedUser
            }
        } catch (error) {
            return {
                ok: false,
                response: error,
            }
        }
    }

}

export default UserDao;