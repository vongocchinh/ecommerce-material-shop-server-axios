import React from "react";
import { Container } from "@material-ui/core";
import './styles.scss';
export default function User(props) {
  const {user}=props;
  return (
    <>
      <Container maxWidth="lg">
        <div className="container-user-detail">
          <p>UserName: {user.username} </p>
          <p>PassWord: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Address: {user.address}</p>
          <p>Gender: </p>
        </div>
      </Container>
    </>
  );
}
