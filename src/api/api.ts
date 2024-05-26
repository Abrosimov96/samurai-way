import axios from "axios";
import {UserType} from '../redux/users-reducer';

type AuthMeAPIType = {
    email: string
    id: number
    login: string
}

export type GetUsersResponseType<D = {}> = {
    items: D
    totalCount: number
    error: string
}

export type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "2800ad43-9529-4c23-8608-2e6f8b2f9c1a"
    }

})

export const userAPI = {
    async getUsers  (currentPage: number = 1, pageSize: number = 5) {
        const res = await instance
            .get<GetUsersResponseType<UserType[]>>(`/users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    async followUser (userID: number) {
        const res = await instance
            .post<ResponseType>(`/follow/${userID}`);
        return res.data;
    },
    async unfollowUser (userID: number){
        const res = await instance
            .delete<ResponseType>(`/follow/${userID}`);
        return res.data;
    }

}

export const authMeAPI = {
    async authMeResponse () {
        const res = await instance
            .get<ResponseType<AuthMeAPIType>>(`/auth/me`);
        return res.data;
    }
}