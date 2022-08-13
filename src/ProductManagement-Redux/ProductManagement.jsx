import React from 'react';
import ProductItem from './Cart';
import ProductList from './ProductList';
import ProductForm from './ProductDetails';
const ProductManagement = () => {
  return (
    <div className="container">
      <div>
        <ProductForm />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductManagement;
