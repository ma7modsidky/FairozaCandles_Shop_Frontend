import React from "react";
import { slide as Menu } from "react-burger-menu";
import { CartState } from "../../context/Context";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";
let Cartbar = (props) => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    // Pass on our props
    <Menu {...props}>
      <h3 className="bold text-xl">Cart Items</h3>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div className="menu-item">
            <div className="flex items-center">
              <img
                src={product.image}
                alt=""
                className=" w-[80px] h-[80px] object-contain"
              />
              <div className="text-sm p-2">
                <p className="text-green-400">{product.price} EGP</p>
                {product.name}
              </div>
              <button
                className=" bg-red-400 hover:bg-red-700 text-white ease-in-out duration-300 rounded-sm flex center px-4 py-1 text-xl"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p> You cart is Empty</p>
      )}
      <div className="menu-item h-[96px]"></div>

      {cart.length > 0 ? (
        <div className="items-center  p-3 absolute bottom-0 left-0 right-0 flex justify-between bg-white">
          <button className="w-[48%] bg-red-400 hover:bg-red-700 text-white p-1  rounded-md ">
            Clear
          </button>
          <button
            className="w-[48%] bg-red-400 hover:bg-green-700 text-white p-1  rounded-md"
            onClick={props.onClose}
          >
            <Link
              // className="mx-auto w-[50%] bg-secondary text-white p-1 rounded-md text-center"
              to="cart/"
            >
              Checkout
            </Link>
          </button>
        </div>
      ) : null}
    </Menu>
  );
};
export default Cartbar;