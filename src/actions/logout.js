import * as typeLogout from './../constant/logout';

export const Logout_User=()=>{
    return {
        type:typeLogout.Logout_User
    }
}

export const Logout_User_Success=()=>{
    return {
        type:typeLogout.Logout_User_Success
    }
}


export const setHandleLogout=()=>{
    return {
        type:typeLogout.setHandleLogout
    }
}

export const setHandleLogoutSuccess=()=>{
    return {
        type:typeLogout.setHandleLogoutSuccess
    }
}