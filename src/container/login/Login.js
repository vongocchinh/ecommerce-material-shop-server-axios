import React from "react";
import LoginComponent from "../../components/user/login/Login";
function Login() {
  const loginUser=(data)=>{
    console.log(data);
  }  
  return (
      <>
        <LoginComponent 
          loginUser={loginUser}
        />
      </>
    );
    
  }

  export default Login;
