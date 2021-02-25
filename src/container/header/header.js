import React ,{useEffect} from "react";
import HeaderComponent from "../../components/layout/header/Header";
import { connect } from "react-redux";
import * as action from "./../../actions/header";
import * as actionProduct from "./../../actions/home";

function Header(props) {
  const {LoginMyReducer}=props;
    useEffect(() => {
    handleGetProductAction();
  });
  const handleGetProductAction=()=>{
    props.handleGetProductAction();
  }
  const nameSearch = (data) => {
    props.nameSearchAction(data);
  };
  return <HeaderComponent nameSearch={nameSearch} titleLogin={LoginMyReducer.titleLogin} LoginMyReducer={LoginMyReducer} />;
}

const mapStateToProps = (state) => {
  return {
    SearchMyReducer:state.SearchMyReducer,
    LoginMyReducer:state.LoginMyReducer
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    nameSearchAction: (data) => {
      dispatch(action.nameSearchAction(data));
    },handleGetProductAction:()=>{
      dispatch(actionProduct.GetDataProduct());
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Header);
