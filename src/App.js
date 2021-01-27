import Routers from "./router/routers";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/header/index";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routers />
      </Router>
    </>
  );
}

export default App;
