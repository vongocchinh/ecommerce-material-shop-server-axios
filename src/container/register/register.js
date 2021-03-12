import React from "react";
import RegisterComponent from "./../../components/user/register/Register";
import { connect } from 'react-redux';
import * as actions from "../../actions/user";
import { Redirect } from 'react-router-dom';

 function register(props) {
  const { SearchMyReducerStore} = props;
  if (SearchMyReducerStore.searchRouter) {
    return <Redirect to="/search" />;
  }
  const RegisterUser = (data) => {
    props.Register_User(data);
  };
  return (
    <>
      <RegisterComponent RegisterUser={RegisterUser} />
    </>
  );
}
 const mapStateToProps=(state)=>{
  return {
    SearchMyReducerStore:state.SearchMyReducer
  }
}
const dispatchToProps=(dispatch,props)=>{
  return{
    Register_User:(data)=>{
      dispatch(actions.Register_User(data));
    }
  }
}
export default connect(mapStateToProps,dispatchToProps)(register);