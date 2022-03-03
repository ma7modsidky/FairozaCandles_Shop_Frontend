import React from 'react'
import productImg1 from '../../assets/images/products/1.jpg'
import productImg2 from "../../assets/images/products/2.jpg";
import productImg3 from "../../assets/images/products/3.jpg";
import productImg4 from "../../assets/images/products/4.jpg";
import productImg5 from "../../assets/images/products/5.jpg";
function ProductList() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg1} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg2} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg3} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg4} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg5} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
      <div className="h-auto w-[100%]  text-center relative">
        <div className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1">
          On Sale
        </div>
        <img src={productImg5} alt="" className="h-[15rem] w-[100%]" />
        <h4 className="mt-3 text-secondary text-l">Product1</h4>
        <p className="text-sm text-gray-400 mt-2">
          Product description lorem ipsum
        </p>
        <p className="text-xl mt-2">
          <span className="current_price text-green-500">50EGP</span>{" "}
          <span className="old_price line-through text-secondary">80EGP</span>
        </p>
        <p className="flex p-2 gap-2">
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Buy
          </a>
          <a
            href=""
            className="flex-1 bg-primary hover:bg-secondary text-white ease-in-out duration-300 rounded-sm px-2"
          >
            Detail
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProductList