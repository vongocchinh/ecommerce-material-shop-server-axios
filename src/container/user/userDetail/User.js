/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
import UserComponent from "./../../../components/user/userDetail/user/User";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as action from './../../../actions/user';
function User(props) {
  const { SearchMyReducerStore, LoginMyReducer,UserMyReducer} = props;
  
  
  if (LoginMyReducer.data.data) {
    if (LoginMyReducer.data.data.user) {
      if (LoginMyReducer.data.data.user.id) {
        useEffect(async () => {
          renderUserDetail();
        },);
      } else {
        return <Redirect to="/login" />;
      }
    } else {
      return <Redirect to="/login" />;
    }
  } else {
    return <Redirect to="/login" />;
  }

  if (SearchMyReducerStore.searchRouter) {
    return <Redirect to="/search" />;
  }
  const renderUserDetail=()=>{
    props.renderUser(LoginMyReducer.data.data.user.id);
  }
  return <UserComponent user={UserMyReducer} />;
}
const mapStateToProps = (state) => {
  return {
    SearchMyReducerStore: state.SearchMyReducer,
    LoginMyReducer: state.LoginMyReducer,
    UserMyReducer:state.UserMyReducer
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    renderUser:(id)=>{
      dispatch(action.getUserDetail(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(User);
