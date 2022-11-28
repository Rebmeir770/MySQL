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
        return response.data;
    }
);