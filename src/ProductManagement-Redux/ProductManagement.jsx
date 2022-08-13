import React from 'react';

import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
const ProductManagement = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Shopping Cart Redux</h1>
      <div className="d-flex justify-content-end mb-5">
        <button className="btn btn-success">Cart</button>
      </div>

      <ProductList />
      <ProductDetails />
      <Cart />
    </div>
  );
};

export default ProductManagement;
