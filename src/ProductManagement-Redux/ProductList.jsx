import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct } from '../redux/productSlice';
const ProductList = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleSelect = (product) => {
    dispatch(selectProduct(product));
  };
  console.log(products);
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <div className="card">
              <img
                src={product.image}
                width="100%"
                height="300px"
                alt={product.name}
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <button
                  className="btn btn-dark"
                  onClick={() => handleSelect(product)}
                >
                  Details
                </button>
                <button className="btn btn-success">Add To Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
