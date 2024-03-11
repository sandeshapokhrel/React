import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

function App() {
  const productlist= [
    {
      price: 100000,
      name:"Iphone 12 Max",
      quantity: 0,
    },
    {
      price: 20000,
      name:"Samsung 12 Max",
      quantity: 0,
    }
  ]
  return (
    <div>
      <Navbar/>
      <ProductList productlist={productlist}/> 
    </div>
  );
}

export default App;
