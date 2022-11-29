import  express from "express";
import { register } from "./users.Cont";
const router = express.Router();

router.post('/register', register);

export default router;