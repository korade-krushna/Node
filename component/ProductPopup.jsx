import React from 'react';
import './ProductPopup.css';

function ProductPopup(props) {
  const { product, onClose } = props;

  return (
    <div className="product-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{product.title}</h2>
        <div className="images-container">
          {product.images.map((image) => (
            <img key={image} src={image} alt={product.title} />
          ))}
        </div>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default ProductPopup;
