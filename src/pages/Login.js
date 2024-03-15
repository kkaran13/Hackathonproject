import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="hkxsbd"
      desc2="zshdv"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login