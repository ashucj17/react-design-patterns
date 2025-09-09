import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const userAuth = (WrapperComponent) => {
  return (props) =>{
           const navigate = useNavigate();
           const isAuth = true;
           useEffect(()=>{
                    console.log("User Authentication", isAuth)
                    if(!isAuth){
                        navigate('/')
                    }
           },[navigate ,isAuth])
           return isAuth ? <WrapperComponent {...props} great="Good Morninng" /> : null;
  }
}

export default userAuth