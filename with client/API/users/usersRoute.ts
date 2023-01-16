import express from "express";
const router = express.Router();
import { login, register } from "./usersCont";

router
    .post('/register', register)
    .get('/login', login)

export default router;
