// import logo from './logo.svg';
import './App.css';
import Products from './Components/Product';
import {a,b} from './Components/Product';
import { useState } from 'react';
import CartContext from './context/CartContext';

function App() {

  let [cart, setCart] = useState({});
  function increaseQuantity (product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity (product) {
    const newCart = { ...cart};
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  console.log(a,b);
  return (
    <CartContext.Provider value={{cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      </div>
    </CartContext.Provider>

  );
}

export default App;