import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { remove } from '../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartItems = ({item}) => {
const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Product Removed");
  }   
  return (
    
    <div>

        <div className='flex items-center justify-center border-b-2 border-black p-2 space-x-10'>
           
            <div className='h-[220px] w-[180px]'>
                <img src={item.image} alt='item-Image' className='h-full w-full'></img>
            </div>
            
            <div className='w-80'>
                <div className='m-2'>
                  <h1 className='font-semibold'>{item.title.split(" ").slice(0,6).join(" ")}
                    <br/>
                    {item.title.split(" ").slice(6).join(" ")}
                  </h1>
                </div>

                <div className='m-2'>
                  <h3 className='text-gray-600'>{item.description.split(" ").slice(0,15).join(" ")+"..."}
                </h3>
                </div>
                
                <div className='flex justify-between mt-20 p-2 text-xl font-semibold'>
                    <p className='text-green-700 font-md'>${item.price}</p>
                
                    <div onClick={removeFromCart} 
                    className='border-2 flex items-center p-2 bg-pink-200 rounded-full
                    hover:bg-red-400'>
                      <AiTwotoneDelete/>
                    </div>
                </div>
            </div>
        </div>  
    
    </div>

  )
}

export default CartItems
