import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./nav/Footer";
import NavBar from "./nav/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar-container">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
