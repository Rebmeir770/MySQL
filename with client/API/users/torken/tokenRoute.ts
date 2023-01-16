import express from "express";
const router = express.Router();
import { token } from "./tokenCont";

router
    .post('/token', token)
    

export default router;
