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
          <div className='grid xs:grid-col-s1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-10 space-y-10 p-2 max-w-6xl mx-auto min-h-[80vh] '>
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
