import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {  Container,  } from "@material-ui/core";
import { useForm,  } from "react-hook-form";
import "./styles.scss";
// import axios from "axios";
function Login(props) {
  const { classes } = props;
  const { register, handleSubmit, errors, } = useForm();
  const onSubmit = (data) => {
    props.loginUser(data);
  };

  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <div className={classes.containerLogin}>
            <div className="center-login">
              <div className="login-left">
                <div className="layoutLogin">
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                        type="submit"
                        className="button-submit"
                        value="Đăng Nhập"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="login-right">aaa</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default withStyles(styles)(Login);

  // const Input = ({ label, required }) => {
  //   return (
  //     <>
  //       <input
  //         name="a"
  //         placeholder={label}
  //         ref={register({ required: true })}
  //         className="input-form"
  //       />
  //       {errors.a && <p>Vui long nhâp LastName</p>}
  //     </>
  //   );
  // };
  // const Select = React.forwardRef(({ label, className }, ref) => (
  //   <>
  //     <select className={className} name={label} ref={ref}>
  //       <option value="20">20</option>
  //       <option value="30">30</option>
  //     </select>
  //   </>
  // ));
  // const Input1 = React.forwardRef(({ label, className }, ref) => (
  //   <>
  //     <input name={label} ref={ref} className={className} />
  //   </>
  // ));


  
                    // {/* <div className="div-control-form-input">
                    //   <Radio label="gender" ref={register} />
                    // </div> */}
      //               {/* <div className="div-control-form-input">
      //                 <Input1 className="input-form" label="address" ref={register({required:true , minLength:2})} />
      //               </div>
      //               <div className="div-control-form-input">
      //               <Controller as={TextField} name="TextField" control={control} defaultValue="" rules={{ required: true }} />
      //               <Controller
      //   name="MyCheckbox"
      //   control={control}
      //   defaultValue={false}
      //   rules={{ required: true }}
      //   render={props =>
      //     <Checkbox
      //       onChange={e => props.onChange(e.target.checked)}
      //       checked={props.value}
      //     />
      //   } // props contains: onChange, onBlur and value
      // />
      //               </div> */}


      // {/* <div className="div-control-form-input">
      //                 <Input label="LastName" registers={register} required />
      //               </div>
      //               <div className="div-control-form-input">
      //               <Select className="input-form" label="number" ref={register} />
      //               </div> */}