import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { Link } from "react-router-dom";
function Register(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    if(data.password===data.passwordConfirm){
      console.log(data.passwordConfirm);
      props.RegisterUser({
        username:data.username,
        password:data.password
      });
    }else{

    }
    reset();
  };

  return (
    <>
      <div className="container">
        <Container maxWidth="lg" className="containerLogin">
          <div className="container-login-body">
        
              <div className="login-left">
                <div className="container-input">
                  <form
                    className="container-left-login"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="container-login-input-page">
                      <h4>Chào Mừng Đăng Ký Vào Cửa Hàng Chúng Tôi.</h4>
                      <div className="div-control-form-input">
                        <input
                          name="username"
                          placeholder="userName"
                          ref={register({ required: true })}
                          className="input-form"
                        />
                        {errors.username && <p>Vui Lòng Nhập Thông Tin</p>}
                      </div>
                      <div className="div-control-form-input">
                        <input
                          name="password"
                          ref={register({ required: true, minLength: 6 })}
                          placeholder="password"
                          className="input-form"
                        />
                        {errors.password && <p>Vui Lòng Nhập Thông Tin</p>}
                      </div>
                      <div className="div-control-form-input">
                        <input
                          name="passwordConfirm"
                          ref={register({ required: true, minLength: 6 })}
                          placeholder="password"
                          className="input-form"
                        />
                        {errors.password && <p>Vui Lòng Nhập Thông Tin</p>}
                      </div>
                      <div className="div-control-form-input">
                        <input
                          type="submit"
                          className="button-submit"
                          value="Đăng Nhập"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="login-right">
                <div className="container-right-login">
                  <div className="container-login-input-page">
                    <p className="title-name-login">
                      Bạn Là Thành Viên , Đăng nhập{" "}
                      <Link to="/login" href="###">
                        tại đây
                      </Link>{" "}
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </Container>
      </div>
    </>
  );
}
export default withStyles(styles)(Register);
