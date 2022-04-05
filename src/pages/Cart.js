import React from 'react'
import Collapse from '../components/Dropdown/Collapse'
import { CartState } from '../context/Context';
import {
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
function Cart() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div className="container mx-auto p-2">
      {/* <Collapse /> */}
      <h1 className="text-secondary text-2xl mb-4">Your shopping cart</h1>
      {cart.length > 0 ? (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-secondary uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Edit
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Unit Price
                </th>
                <th scope="col" class="px-6 py-3">
                  {/* <span class="sr-only">Edit</span> */}
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr class="bg-white border-b ">
                  <td class="px-3">
                    <img
                      src={product.image}
                      alt=""
                      className=" w-[100px] h-[100px] object-contain"
                    />
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 ">
                    {product.name}
                  </th>
                  <td class="px-6 py-4">{product.qty}</td>
                  <td class="px-6 py-4 text-right flex-col align-middle justify-center space-y-1">
                    <button
                      className="  bg-green-400 hover:bg-green-700 text-white ease-in-out duration-300 rounded-sm flex center px-1 py-1 text-xl"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: product.id, qty: product.qty + 1 },
                        })
                      }
                    >
                      <AiOutlineArrowUp />
                    </button>
                    <button
                      className="  bg-orange-400 hover:bg-orange-700 text-white ease-in-out duration-300 rounded-sm flex center px-1 py-1 text-xl"
                      onClick={() =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: product.id, qty: product.qty - 1 },
                        })
                      }
                    >
                      <AiOutlineArrowDown />
                    </button>
                    <button
                      className=" bg-red-400 hover:bg-red-700 text-white ease-in-out duration-300 rounded-sm flex center px-1 py-1 text-xl"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    >
                      <AiOutlineClose />
                    </button>
                  </td>
                  <td class="px-6 py-4">Pink</td>
                  <td class="px-6 py-4">Candle</td>
                  <td class="px-6 py-4">{product.price}</td>
                  <td class="px-6 py-4">{product.price * product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-primary">You cart is empty, start shopping now</p>
      )}
    </div>
  );
}

export default Cart