import React from "react";
import logo from '../logo.svg';

const Navbar = () => (
  <nav className="navbar navbar- bg-light">
    <a className="navbar-brand">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      /> Bowling For *
    </a>
  </nav>
);

export default Navbar;
