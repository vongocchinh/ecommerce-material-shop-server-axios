"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");
const jwt = require("jsonwebtoken");
const table = "user";

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM cart";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.json(response);
    });
  },
  detail: (req, res) => {
    const token = req.params.token;
    var decoded = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    let sql = "SELECT * FROM user WHERE id = " + decoded.id;
    db.query(sql, [decoded.id], (err, response) => {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send({
        user: {
          username: response[0].username,
          address: response[0].address,
        },
      });
    });
  },
  updateAddQty: (req, res) => {
    // let data = req.params.id;
    let id = req.params.id;
    let sql = "UPDATE cart SET qty = qty + 1  WHERE id = ? ";
    db.query(sql,[id], (err, response) => {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO cart SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(204).send({});
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send({});
    });
  },
};
