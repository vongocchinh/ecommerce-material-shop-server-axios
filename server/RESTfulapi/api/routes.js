"use strict";
module.exports = function (app) {
  var productsCtrl = require("./controllers/ProductsController");

  var userCtrl = require("./controllers/userController");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);
  app.get("/products/productDetail/:id",productsCtrl.detail);
  // app
  //   .route("/products/:productId")
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);

  app.get("/products/:name",productsCtrl.search);

  app.post("/user/login",userCtrl.login);
  app
    .route("/user/:userId")
    .get(userCtrl.detail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

    app.post('/user/register',userCtrl.store);
};
