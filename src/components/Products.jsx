import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';

const Products = ({item}) => {

  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const addToCart=()=>{
    dispatch(add(item));
    toast.success("Product Added Successfully");
  }

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Product Removed from Cart");
  }

  return (
    <div className='p-5 gap-3 mt-10 ml-10 rounded-xl bg-pink-300
     hover:scale-110 transition duration-300 ease-in cursor-pointer 
     hover:border shadow-lg shadow-slate-700'>

      <div className='flex flex-col items-center justify-center'>

          <div className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
            {item.title}
          </div>

          <div className='text-gray-500 font-normal text-[12px] text-left mt-1 w-40'>
            {item.description.split(" ").slice(0,10).join(" ")+"..."}
          </div>
          
           <div className='h-[180px]'>
           <img src={item.image} alt='productImage' className='h-full w-full'></img>
           </div>
        
        </div>

      <div className='flex justify-between items-center w-full mt-5'>
        
        <div>
          <p className='text-green-600 font-semibold'><span>$ </span>{item.price}</p>  
        </div>   

        {
          cart.some((i)=>i.id===item.id) ? 
          (
            <button 
            className='border-2 border-gray-700 text-white bg-green-500 
            rounded-full text-[12px] font-semibold p-1 px-3 uppercase 
            transition duration-300 ease-in
            hover:text-white'
             onClick={removeFromCart}
            >Remove Item</button>
          ) :
          (
            <button className='border border-gray-700 text-gray-700 
            rounded-full text-[12px] font-semibold p-1 px-3 uppercase transition duration-300 ease-in
            hover:bg-blue-500
            hover:text-white
            '
             onClick={addToCart}
            >Add to Cart</button>
          )

        }
      </div>
    </div>
  )
}

export default Products
