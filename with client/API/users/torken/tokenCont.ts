import { connection } from "../../../server";
import { UserJoi } from "./tokenModel";

export function token(req, res) {
    try {
        console.log('data from server')
        const { token } = req.body;
        console.log(req.body);
        const { error } = UserJoi.validate({ token });
        if (error) throw error;

        const query = `INSERT INTO token (token) VALUES ('${token}')`;
        connection.query(query, (err, result, fields) => {
            console.log(result);
            console.log(fields);
            try {
                if (err) throw err;
                res.send({ ok: true, token: {token} });
            } catch (error) {
                console.error(error);
                res.status(500).send({ error: error.messege })
            }

        });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messege })
    }

}

