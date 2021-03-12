/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import UserComponent from "./../../../components/user/userDetail/user/User";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as action from "./../../../actions/user";
function User(props) {
  const { SearchMyReducerStore, LoginMyReducer, UserMyReducer } = props;

  if (LoginMyReducer.token) {
  } else {
    return <Redirect to="/login" />;
  }
  useEffect(() => {
    renderUserDetail();
  }, [1]);
  if (SearchMyReducerStore.searchRouter) {
    return <Redirect to="/search" />;
  }
  const renderUserDetail = () => {
    // console.log(LoginMyReducer.data.data.token);
    props.renderUser(LoginMyReducer.token);
  };
  return <UserComponent user={UserMyReducer} />;
}
const mapStateToProps = (state) => {
  return {
    SearchMyReducerStore: state.SearchMyReducer,
    LoginMyReducer: state.LoginMyReducer,
    UserMyReducer: state.UserMyReducer,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    renderUser: (id) => {
      dispatch(action.getUserDetail(id));
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(User);
