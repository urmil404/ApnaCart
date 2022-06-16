import React from "react";
import Product from "./Product";

const ProductList = ({ pl }) => {
  return pl.map((product,index) => {
      return <Product p={ product } key={index} />;
  });
};

export default ProductList;
