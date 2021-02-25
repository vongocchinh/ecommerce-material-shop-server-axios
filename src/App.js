import Routers from "./router/routers";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./container/header/Header";
import Footer from "./container/footer/footer";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App(props) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Header />
        <Routers />
        <Footer />
      </Router>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    SearchMyReducer: state.SearchMyReducer,
  };
};
export default connect(mapStateToProps, null)(App);
