import { connection } from "../../server";
import { UserJoi } from "./usersModel";

export  function  register(req, res){
   try {
       const {email, password, name} = req.body;

       const {error} = UserJoi.validate({email, password, name});
       if (error) throw error;

       const query = `INSERT INTO users VALUES ('${email}','${name}','${password}')`;
        connection.query(query, (err, res) =>{
           if(err) throw err;
           res.send({ok:true, result:res});
        });

       res.send({ok:true})
   } catch (error) {
       console.error(error);
       res.status(500).send({error:error.messege})
   }

}
