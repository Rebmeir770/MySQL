import { createAsyncThunk } from "@reduxjs/toolkit";
import { response } from "express";
import axios from "axios";



interface userRegister{
    email:string,
    password:string,
    name:string,
}

export const registerAsync = createAsyncThunk(
    'user/register',
    async ({email, password, name }:userRegister) =>{
        const response = await axios.post('/api/users/register',{email, password, name});
        // The value we return becomes the 'fulfiled' action payload
        console.log(response.data);
        return response.data;
    }
);

interface userLogin{
    password:string,
    username:string,
}

export const loginAsync = createAsyncThunk (
    'user/login',
    async ({username, password}:userLogin) => {
        const response = await axios.get(`/api/users/login?username=${username}&password=${password}`);
        console.log(response.data);
        return response.data;
    }
);