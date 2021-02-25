import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import HomeContainer from "../container/home/Home";
import LoginContainer from '../container/login/Login';
import RegisterContainer from '../container/register/register';
import CartContainer from '../container/cart/Cart';
import ProductDetailContainer from './../container/product/ProductDetail';
import ProductSearchContainer from './../container/productSearch/Product';
import UserDetailContainer from './../container/user/userDetail/User';
import LogoutContainer from './../container/header/Logout';
class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route  path="/login" component={LoginContainer} />
          <Route  path="/register" component={RegisterContainer} />
          <Route path="/product/:name/:id.html" component={ProductDetailContainer}/>
          <Route path="/cart"  component={CartContainer} />
          <Route  path="/search" component={ProductSearchContainer} />
          <Route path="/user" component={UserDetailContainer} />
          <Route path="/logout" component={LogoutContainer} />
        </Switch>
      </div>
    );
  }
}
export default routers;
