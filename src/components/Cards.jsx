import React, { useState, useEffect } from 'react';
import Addproduct from './Addproduct.jsx';
import { Link } from 'react-router-dom';

export default function Cards({data}) {
    
    return (
        <> 
<div className="flex flex-wrap justify-center overflow-hidden mt-7">
  {data ? data.map((item) => (
    <div key={item.id} className="border-2 m-2 flex flex-col overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:translate-x-[20px] hover:translate-y-[20px] w-[20vw] h-[65vh]">
      <img className="w-full h-[50%] object-cover" src={item.urls.full} alt="0000" />
      <div className="flex justify-center items-center flex-col p-2 h-[50%] overflow-auto">
        <h1 className="text-3xl text-center">{item.slug.slice(0,20)}</h1>
        <p className="text-center">{item.description ? item.description :item.alt_description}</p>
      </div>
    </div>
  )) : <p>Loading...</p>}
</div>
        
<div className="flex justify-center items-center m-7">
   <Link to="/Addproduct"> <button className="rounded-lg add_product py-3 px-5">Add Products</button></Link>
</div>
          
        </>
    );
}


     