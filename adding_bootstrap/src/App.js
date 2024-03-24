import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import React, { useState } from 'react';

function App() {
  const initialProductList = [
    {
      price: 100000,
      name: "Iphone 12 Max",
      quantity: 0,
    },
    {
      price: 20000,
      name: "Samsung 12 Max",
      quantity: 0,
    }
  ];

  const [productlist, setProductList] = useState(initialProductList);

  const incrementQuantity = (index) => {
    let newProductList = [...productlist];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  return (
    <div>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productlist={productlist} incrementQuantity={incrementQuantity} />
      </main>
    </div>
  );
}

export default App;
