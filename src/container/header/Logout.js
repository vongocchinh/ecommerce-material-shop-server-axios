import React ,{useEffect} from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import * as actions from './../../actions/logout';
function Logout(props) {
  const {LoginMyReducer}=props;
  useEffect(() => {
    props.LogoutUser();
  },)
  if(LoginMyReducer.Logout_User_Success){
    return <Redirect to="/login" />
  }
  
  return <></>;
}
const mapStateToProps=(state)=>{
  return {
    LoginMyReducer:state.LoginMyReducer
  }
}
const dispatchToProps=(dispatch,props)=>{
  return {
    LogoutUser:()=>{
      dispatch(actions.Logout_User());
    },
    setHandleLogout:()=>{
      dispatch(actions.setHandleLogout());
    }
  }
}
export default (connect(mapStateToProps,dispatchToProps))(Logout);
