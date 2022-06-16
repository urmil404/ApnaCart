import React from "react";

function Product(ProductDetails) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>{ProductDetails.p.name}</h2>
      </div>
    </div>
  );
}

export default Product;
