import React from "react";
import { push as Menu } from "react-burger-menu";

let Sidebar = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Candles
      </a>

      <a className="menu-item" href="/pizzas">
        Sets
      </a>

      <a className="menu-item" href="/desserts">
        offers
      </a>
    </Menu>
  );
};
export default Sidebar