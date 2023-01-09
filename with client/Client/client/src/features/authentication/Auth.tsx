import { useState, useEffect } from 'react';
import axios from 'axios';


export const Auth = (code:any) => {
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
          setExpiresIn(res.data.expiresIn)
          window.history.pushState({}, "/", null )
       })
        .catch(() => {
      //  .catch((e) => {
      //    alert("Error"+JSON.stringify(e))
          window.location.href = "/"
       })
     }, [code])

     useEffect(() => {
          if (!refreshToken || !expiresIn) return
          const interval = setInterval (() => {
            
               axios.post('http://localhost:3000/refresh', {
                    refreshToken,
                 })
                 .then(res => {
                    setAccessToken(res.data.accessToken)
                    setRefreshToken(res.data.expiresIn)  
                  })
                   .catch(() => {
                  // .catch((e) => {
                  //    alert("Error"+JSON.stringify(e))
                    window.location.href = "/"
               })
          },(expiresIn - 60)* 1000)
       return () => clearInterval(interval)
     },[refreshToken, expiresIn])
     
   return accessToken 
}

export default Auth