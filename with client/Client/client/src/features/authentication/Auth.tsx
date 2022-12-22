import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NULL } from 'sass';
import { prototype } from 'stream';
import { string } from 'joi';


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
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, "/", null )
           })
           .catch(() => {
            
            window.location.assign("/")

           })
     }, [code])

     useEffect(() => {
       
     
       
     }, [refreshToken, expiresIn])

     return accessToken
     
     
  
}

export default Auth