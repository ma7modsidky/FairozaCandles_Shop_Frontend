import React from 'react'
import { Link } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CartState } from "../../context/Context";

function ProductCard({product}) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="h-auto w-[100%]  text-center relative">
      <div className="absolute top-4 left-4 bg-secondary text-white px-1 py-1 text-xs rounded-md">
        On Sale
      </div>
      <img
        src={product.image}
        alt=""
        className=" w-[100%] h-[200px] object-contain"
      />
      <h4 className="mt-2 text-secondary text-l h-[50px] overflow-clip">
        {product.name}
      </h4>
      {/* <p className="text-sm text-gray-400 mt-2">
        Product description lorem ipsum
      </p> */}
      <p className="text-xl mt-2">
        <p className="current_price text-green-500">{product.price}EGP</p>{" "}
        <p className="old_price line-through text-secondary">
          {product.price}EGP
        </p>
      </p>
      <p className="flex justify-center p-2 gap-2 ">
        {cart.some((p) => p.id === product.id) ? (
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
        ) : (
          <button
            className=" bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm flex center px-4 py-1 text-xl"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            <BsCart />
          </button>
        )}
        <button className=" bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm flex center px-4 py-1 text-xl">
          <Link to={"/product/"+product.id+"/details"}>
            <AiOutlineEye />
          </Link>
        </button>
        <button className=" bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm flex center px-4 py-1 text-xl">
          <AiOutlineHeart />
        </button>
      </p>
    </div>
  );
}

export default ProductCard