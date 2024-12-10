import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItems from '../components/CartItems';

const Cart = () => {

  const cart= useSelector((state)=>state.cart);

  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price, 0) );
  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ? 
        
          ( <div>
              <div>
                {
                  cart.map((item,index)=>
                  {
                    return <CartItems key={item.id} item={item}/>
                  }
                  )
                }
                </div>

                <div>
                  <h2>YOUR CART</h2>
                  <h1>SUMMARY</h1>
                  <p>
                      <span>Total Items: {cart.length}</span>
                  </p>
                  <div>
                      <p>Total Amount: {totalAmount}</p>
                      <button>CheckOut Now</button>
                  </div>
                </div>
            </div>
          )
         : 
        (
          <div>
          <p> Cart is empty </p>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
          </div>
        )
      }
    </div>
  );
}

export default Cart
