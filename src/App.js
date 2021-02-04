import Routers from "./router/routers";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './container/header/header';
import Footer from './container/footer/footer';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routers />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
