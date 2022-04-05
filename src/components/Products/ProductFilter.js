import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import DropdownList from "../Dropdown/DropdownList";
import { CartState } from "../../context/Context";
import "@themesberg/flowbite";
function ProductFilter() {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();
    const [data, setData] = useState({ categories: [], dataIsReturned: false });
    useEffect(() => {
        axiosInstance
        .get(`categories/`)
        .then((res) => {
            setData({
            categories: res.data,
            dataIsReturned: true,
            });
        })
        .catch((err) => {
            setData({ categories: [], dataIsReturned: false });
        });
    }, []);
    const { dataIsReturned, categories } = data;
    return (
      <div
        className="hidden sticky flex-none w-[12.5rem] h-[30rem] mr-4 border border-primary rounded-md bottom-[20px]  md:block  p-3"
        aria-label="Sidebar"
      >
        <h2 className="font-medium text-xl text-secondary">Filter Products </h2>
        <hr />
        <h3 className="text-secondary font-medium">-By Category</h3>
        <ul className="text-primary">
          {dataIsReturned
            ? categories.map((c, index) =>
                c.level === 0 ? (
                  <DropdownList name={c.name} childs={c.children} key={index} id={c.id}/>
                ) : null
              )
            : 
            <p>Loading</p>}
          <br />
          <hr />
          <ul>
            <h3 className="text-secondary font-medium">-By size</h3>
            <li className="hover:text-secondary text-sm pointer cursor-pointer">
              Small
            </li>
            <li className="hover:text-secondary text-sm pointer cursor-pointer">
              Medium
            </li>
            <li className="hover:text-secondary text-sm pointer cursor-pointer">
              Large
            </li>
          </ul>
          <br />
          <hr />
          <ul>
            <h3 className="text-secondary font-medium">-By price</h3>
            <form>
              <li
                className="hover:text-secondary text-sm pointer cursor-pointer"
                onClick={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
              >
                Ascending
              </li>
              <li
                className="hover:text-secondary text-sm pointer cursor-pointer"
                onClick={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
              >
                Descending
              </li>
            </form>
          </ul>
        </ul>
      </div>
    );
}

export default ProductFilter