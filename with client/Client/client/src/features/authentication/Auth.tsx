import { useState, useEffect } from 'react';
import axios from 'axios';
import { selectToken } from '../authentication/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { tokenAsync } from './authApi';


export const Auth = (code:any) => {
   
   const [accessToken, setAccessToken] = useState()
   const [refreshToken, setRefreshToken] = useState()
   const [expiresIn, setExpiresIn] = useState()
   
   
   
   useEffect(() => {
      //create reduxthunk function
      //redux - save the token in state via dispatch
      const dispatch = useAppDispatch();
      const token = useAppSelector(selectToken)
      console.log(token);
      //the value from server will insert to action.payload
      
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
          window.location.pathname === "/"
       })

       dispatch(tokenAsync({
          token: ''
       }))
     }, [code])

     useEffect(() => {
          if (!refreshToken || !expiresIn) return;
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
                    window.location.pathname === "/"
               })
          },(expiresIn - 60)* 1000)
       return () => clearInterval(interval)
     },[refreshToken, expiresIn])
     
   return accessToken 
}

export default Auth