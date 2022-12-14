import { connection } from "../../server";
import { UserJoi } from "./usersModel";

export function register(req, res) {
    try {
        console.log('data from server')
        const { email, password, name } = req.body;
        console.log(req.body);
        const { error } = UserJoi.validate({ email, password, name });
        if (error) throw error;

        const query = `INSERT INTO users (email, password, name) VALUES ('${email}','${name}','${password}')`;
        connection.query(query, (err, result, fields) => {
            console.log(result);
            console.log(fields);
            try {
                if (err) throw err;
                res.send({ ok: true, user: {email, name} });
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

export function login(req, res) {
    try {
        const { password, name } = req.query;

        const { error } = UserJoi.validate({ password, name });
        if (error) throw error;

        const query = `INSERT INTO users (password, name) VALUES ('${password}','${name}')`;
        connection.query(query, (err) => {
            try {
                if (err) throw err;
                res.send({ ok: true, user: name  });
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
