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
    toast.remove("Product Removed from Cart");
  }

  return (
    <div>
      <div>
        {item.title}
      </div>
      <div>
        {item.description}
      </div>
      <div>
        <img src={item.image} alt='productImage'></img>
      </div>
      <div>
        <p>{item.price}</p>
      </div>

      {
        cart.some((i)=>i.id===item.id) ? 
        (
          <button onClick={removeFromCart}
          >Remove Item</button>
        ) :
        (
          <button onClick={addToCart}
          >Add to Cart</button>
        )

      }
    </div>
  )
}

export default Products
