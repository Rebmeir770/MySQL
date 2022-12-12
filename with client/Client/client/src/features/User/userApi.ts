import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userRegister {
    email: string,
    password: string,
    name: string,
}

export const registerAsync = createAsyncThunk('user/register', async ({ email, password, name }: userRegister) => {
    const {data} = await axios.post('/api/users/register', {email, password, name}) 
    return data
})

interface userLogin {
    password: string,
    username: string,
}

export const loginAsync = createAsyncThunk(
    'user/login',
    async ({ username, password }: userLogin) => {
        const {data} = await axios.get(`/api/users/login?name=${username}&password=${password}`);
        console.log(data);
        return data;
    }
);