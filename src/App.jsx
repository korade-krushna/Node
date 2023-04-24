import './App.css'
import axios from 'axios';
import { useState, useEffect } from "react";
import ProductList from '../component/ProductList';



function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getAllProducts() {
    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

    getAllProducts();
  }, []);

  return (
    <div className="container">
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  )
}

export default App