import * as typeLogin from './../constant/login';
import * as typeUser from './../constant/user';
import * as typeRegister from './../constant/register';

export const Login_User=(data)=>{
    return {
        type:typeLogin.Login_User,
        payload:data
    }
}

export const Login_User_Success=(data)=>{
    return {
        type:typeLogin.Login_User_Success,
        payload:data
    }
}

export const Login_User_Fail=()=>{
    return {
        type:typeLogin.Login_User_Fail
    }
}

export const setOnRedirectLogin=()=>{
    return{
        type:typeLogin.setOnRedirectLogin
    }
}

export const setOnRedirectLoginSuccess=()=>{
    return{
        type:typeLogin.setOnRedirectLoginSuccess,
    }
}


export const getUserDetail=(id)=>{
    return {
        type:typeUser.getUserDetail,
        id
    }
}


export const getUserDetailSuccess=(user)=>{
    return {
        type:typeUser.getUserDetailSuccess,
        user
    }
}


export const Register_User=(data)=>{
    return{
        type:typeRegister.Register_User,
        payload:{
            data
        }
    }
}
export const Register_User_Success=()=>{
    return{
        type:typeRegister.Register_User_Success,
    }
}