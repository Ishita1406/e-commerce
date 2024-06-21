import './ProductCard.css';
import {useRef, useState} from 'react';
import AddToCart from './AddToCart';

function ProductCard({product, cart, increaseQuantity, decreaseQuantity}){
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');

  function printTitle(){
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    if(pRef.current.style.display === "none" ){
      pRef.current.style.display = "block";
    }
    else{
      pRef.current.style.display = "none";
    }
  }

  // console.log('Rerendered', inputV);
  function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${iRef.current.value}`;
    setInputV(e.target.value);
  }

  return(
    <div className="product-card">
    <p onClick={printTitle}> {product.title} </p>
    <p ref ={pRef}>{product.price.value}</p>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <input type="text" onChange={displayOutput} ref = {iRef} value = {inputV}/>
    <p ref={oRef}>Over here the output would arrive - {inputV}</p>
    <AddToCart product={product} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  )
}

export default ProductCard;
