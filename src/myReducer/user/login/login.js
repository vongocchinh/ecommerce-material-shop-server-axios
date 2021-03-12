import * as typeLogin from "./../../../constant/login";
import * as typeLogout from "./../../../constant/logout";
var initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") :'',
  titleLogin: JSON.parse(localStorage.getItem("login")),
  Login_User_Success: false,
  Logout_User_Success: false,
};

var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case typeLogin.Login_User_Success:
      var title = {
        name: "Đăng Xuất",
        redirect: "logout",
      };
      localStorage.setItem("login", JSON.stringify(title));
      state = {
        ...state,
        token: actions.payload,
        Login_User_Success: true,
        titleLogin: title,
      };
      return state;
    case typeLogin.setOnRedirectLoginSuccess:
      state = {
        ...state,
        Login_User_Success: false,
      };
      return state;
    case typeLogout.Logout_User_Success:
      var titles = {
        name: "Đăng Nhập",
        redirect: "login",
      };
      localStorage.setItem("login", JSON.stringify(titles));
      state = {
        ...state,
        token: '',
        Logout_User_Success: true,
        titleLogin: titles,
      };
      return state;
    case typeLogout.setHandleLogoutSuccess:
      state = {
        ...state,
        Logout_User_Success: false,
      };
      return state;
    default:
      return state;
  }
};
export default myReducer;
