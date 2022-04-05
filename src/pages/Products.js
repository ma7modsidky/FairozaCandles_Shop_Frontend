import React from 'react'
import ProductList from "../components/Products/ProductList";
import { CartState } from '../context/Context';
import products from "../utils/Data";
import {useState,useEffect} from 'react';
import axiosInstance from '../axios';
import ProductFilter from '../components/Products/ProductFilter';
function Products() {
  

  return (
    <div className="container mx-auto p-2 flex relative">
      <ProductFilter />
      <div className="mx-auto">
        <h1 className="text-secondary uppercase font-medium text-xl my-2">
          All Products
        </h1>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Products