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
        
          ( <div className='p-2  flex space-x-5 justify-center'>

              <div className='p-1 '>
                {
                  cart.map((item,index)=>
                  {
                    return <CartItems key={item.id} item={item}/>
                  }
                  )
                }
                </div>

                <div className='p-4 m-4 flex flex-col justify-between tracking-wider'> 
                  <div>
                    <h3 className='text-lg font-semibold text-green-700'>YOUR CART</h3>
                    <h1 className='mt-2 text-3xl font-semibold text-green-700 leading-none'>SUMMARY</h1>
                    <p className='mt-2'>
                        <span className='font-semibold'>Total Items: </span>{cart.length}
                    </p>
                  </div>

                  <div  className='font-semibold'>
                      <p>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
                      <button className='mt-2 border border-green-600 rounded-md text-lg text-white p-2 flex justify-center items-center w-full bg-green-700'>CheckOut Now</button>
                  </div>
                </div>
            </div>
          )
         : 
        (
          <div className='flex justify-center items-center flex-col min-h-screen '>

            <p className='text-xl text-green-700'> Cart is empty </p>

            <NavLink to="/">
              <button className='border border-black rounded-md bg-pink-400 text-xl p-2 mt-5 text-white'>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
}

export default Cart
