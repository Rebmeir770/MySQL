import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface tokenKey {
    token: string;
}

export const tokenAsync = createAsyncThunk(
    'key/token',
   async ({token}:tokenKey) => {
    const {data} = await axios.post('/api/token', {token})
    console.log(data);
    return data;
   }
);