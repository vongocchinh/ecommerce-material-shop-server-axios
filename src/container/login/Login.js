import React from "react";
import LoginComponent from "../../components/user/login/Login";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import * as action from "./../../actions/user";

import * as actions from "./../../actions/logout";
function Login(props) {
  const { SearchMyReducer, LoginMyReducer } = props;
  const loginUser = (data) => {
    props.dispatchLoginUser(data);
  };

  if (SearchMyReducer.searchRouter) {
    return <Redirect to="/search" />;
  }
  if (LoginMyReducer.Logout_User_Success) {
    // window.location.reload();
  }
  if (LoginMyReducer.Login_User_Success) {
    setTimeout(() => {
      props.setOnRedirectLoginSuccess();
    }, 1000);
    return <Redirect to="/" />;
  }
  if (LoginMyReducer.data.data) {
    if (LoginMyReducer.data.data.user) {
      if(LoginMyReducer.data.data.user.id){
        return <Redirect to="/user" />;
      }
    }
  }

  return (
    <>
      <LoginComponent loginUser={loginUser} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    SearchMyReducer: state.SearchMyReducer,
    LoginMyReducer: state.LoginMyReducer,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    dispatchLoginUser: (data) => {
      dispatch(action.Login_User(data));
    },
    setOnRedirectLoginSuccess: () => {
      dispatch(action.setOnRedirectLogin());
    },
    setHandleLogout: () => {
      dispatch(actions.setHandleLogout());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Login);
