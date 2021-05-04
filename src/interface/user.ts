import { IUser } from "../schema/user";

export interface IUsersResponse {
    ok: boolean;
    users: IUser[];
    status: number;
}

export interface IUserResponse {
    ok: boolean;
    user: IUser;
    status: number;
}