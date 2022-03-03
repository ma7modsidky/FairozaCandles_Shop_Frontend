import React from "react";
import { push as Menu } from "react-burger-menu";

let Cartbar = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Cart Item
      </a>

      <a className="menu-item" href="/burgers">
        Cart Item
      </a>

      <a className="menu-item" href="/pizzas">
        Cart Item
      </a>

      <a className="menu-item" href="/desserts">
        Cart Item
      </a>

      <button className="mx-auto bg-secondary text-white p-4">
        Check Out
      </button>
    </Menu>
  );
};
export default Cartbar;