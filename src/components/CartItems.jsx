import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { remove } from '../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartItems = ({item}) => {
const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Product Removed");
  }   
  return (
    <div>
        <div>
            <div>
                <img src={item.image} alt='item-Image'></img>
            </div>
            <div>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div>
                    <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <AiTwotoneDelete/>
                </div>
                </div>
            </div>
        </div>  
    
    </div>

  )
}

export default CartItems
