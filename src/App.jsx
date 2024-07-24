import './App.css'
import {useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav.jsx";
import Product from "./components/Product.jsx";
import Home from "./components/Home.jsx";
import Laptop from "./components/Laptop.jsx";
import Furniture from "./components/Furniture.jsx";
import Clothes from "./components/Clothes.jsx";
import Contact from "./components/Contact.jsx";
import Mobile from "./components/Mobile.jsx";
import Addproduct from "./components/Addproduct.jsx";
import { Link,Route,Routes } from 'react-router-dom';
function App() {  

  

  
 

  return (
    <>
    <div>
    <Nav/>
    
     <Routes>
     <Route path="/" element={<Product/>}/>
     <Route path="/Home" element={<Home/>}/>
       <Route path="/Mobile" element={<Mobile/>}/>
       <Route path="/Addproduct" element={<Addproduct/>}/>
       <Route path="/Clothes" element={<Clothes/>}/>
       <Route path="/Laptop" element={<Laptop/>}/>
       <Route path="/Furniture" element={<Furniture/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       

     </Routes>
     </div>
    </>
  )
}

export default App
