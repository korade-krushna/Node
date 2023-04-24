import React, { useState } from 'react';
import ProductPopup from './ProductPopup';
import './ProductList.css';

function ProductList(props) {
  const { products } = props;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log(product)
    setSelectedProduct(product);
  }

  return (
    <div className="product-list">
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item" onClick={() => handleProductClick(product)}>
            <img src={product.thumbnail} alt={product.title} onClick={() => handleProductClick(product)}/>
            <h3>{product.title}</h3>
            <p>$  {product.price}</p>
          </div>
        ))}
      </div>
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default ProductList;
