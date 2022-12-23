import { useState, useEffect } from 'react';
import axios from 'axios';


const Auth = (code:any) => {
     const [accessToken, setAccessToken] = useState()
     const [refreshToken, setRefreshToken] = useState()
     const [expiresIn, setExpiresIn] = useState()

     useEffect(() => {
       axios.post('http://localhost:3000/ready', {
          code,
       })
       .then(res => {
          setAccessToken(res.data.accessToken)
          setRefreshToken(res.data.refreshToken)
       })
       .catch(() => {
          window.location.assign("/")
       })
     }, [code])

     useEffect(() => {
       axios.post('http://localhost:3000/refresh', {
          refreshToken,
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
     },[refreshToken, expiresIn])
     
     return accessToken 
}

export default Auth