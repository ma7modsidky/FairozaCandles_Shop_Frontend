import React from 'react'
import ProductCard from './ProductCard';
import { CartState } from '../../context/Context';
import productImg2 from "../../assets/images/products/2.jpg";


function ProductList({products}) {
  const {
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    state: {products2}
  } = CartState();
  console.log(products)

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {transformProducts().map((prod) => (
        <ProductCard product={prod}/>
      ))}
    </div>
  );
}

export default ProductList