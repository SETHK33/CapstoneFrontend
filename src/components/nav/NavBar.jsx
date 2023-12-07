import { NavLink } from "react-router-dom";

import logo from "../../assets/images/2950-fixed.png";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={logo} alt="2950 logo" />
        </div>
        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
}
