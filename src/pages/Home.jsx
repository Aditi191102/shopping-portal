import React, { useState, useEffect } from 'react'
import Products from '../components/Products';
import Spinner from '../components/Spinner'; 

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";

  const [items,setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchInfo() {
    setLoading(false);
    try{
      const data = await fetch(API_URL);
      const res = await data.json();

    setItem(res);
    }
    catch(error){
      alert("error detected");
    }
    setLoading(true);
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  return (
    <div>
      {
        loading ? (
      items.length>0 ? 
      (
        <div>
          {items.map((item)=>(
          <Products key={item.id} item={item}/>
        ) )
          }
        </div>
      ):
      (<p>No Product Available</p>)
    ):
    (<Spinner/>)
    }
    </div>
  )
}

export default Home
