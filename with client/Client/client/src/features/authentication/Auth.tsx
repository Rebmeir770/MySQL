import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { textChangeRangeIsUnchanged } from 'typescript';

const Auth = (code:any) => {
     const [accessToken, setAccessToken] = useState()
     const [refreshToken, setRefreshToken] = useState()
     const [expiresIn, setExpiresIn] = useState()

     useEffect(() => {
       axios
           .post('http://localhost:3000/ready', {
            code,
           })
           .then(res => {
            console.log(res.data)
           })
     }, [code])
     
  
}

export default Auth