import React from 'react';
import { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
const ProductManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="container">
      <h1 className="text-center text-primary">Shopping Cart Redux</h1>
      <div className="d-flex justify-content-end mb-5">
        <button className="btn btn-success" onClick={onOpen}>
          Cart
        </button>
      </div>

      <ProductList />
      <ProductDetails />
      <Cart onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default ProductManagement;
