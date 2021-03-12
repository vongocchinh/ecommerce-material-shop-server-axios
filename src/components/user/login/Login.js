import React ,{useState} from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { Link } from "react-router-dom";
import  PropTypes  from 'prop-types';
function Login(props) {
  // const { classes } = props;
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    props.loginUser(data);
    reset();
  };
  const [pw, setPw] = useState(false)
  const showHidden=()=>{
    setPw(!pw);
  }
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
                    <h4>Chào Mừng Đăng Nhập Vào Cửa Hàng Chúng Tôi.</h4>
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
                        type={pw?"text":"password"}
                        ref={register({ required: true, minLength: 6 })}
                        placeholder="password"
                        className="input-form"
                      />
                      {errors.password && <p>Vui Lòng Nhập Thông Tin</p>}
                      <div className="show-hidden" onClick={showHidden}>{pw?"Hidden":"show"}</div>
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
                    Bạn Chưa Là Thành Viên , Đăng ký{" "}
                    <Link to="/register" href="###">
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
Login.propTypes={
  username:PropTypes.string,
  password:PropTypes.string
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

// <div className="container-login-right">
// <div className="component-login-title-left">
//   <p className="title-name">
//     Bạn Chưa Là Thành Viên , Đăng ký{" "}
//     <Link to="/register" href="###">
//       tại đây
//     </Link>{" "}
//     .
//   </p>
// </div>
// </div>
