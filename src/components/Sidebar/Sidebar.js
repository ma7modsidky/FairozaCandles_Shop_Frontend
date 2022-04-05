import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
let Sidebar = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item my-6" to="/">
        Home
      </Link>

      <Link className="menu-item my-6" to="/products">
        Products
      </Link>

      <Link className="menu-item my-6" to="/collections">
        Sets
      </Link>

      <Link className="menu-item my-6" to="/cart">
        Cart
      </Link>

      <Link className="menu-item my-6" to="/about_us">
        About us
      </Link>
    </Menu>
  );
};
export default Sidebar