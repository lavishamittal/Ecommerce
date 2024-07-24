import React from "react";
import { Link,Route,Routes } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import { CiMobile3 } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { FcBusinessContact } from "react-icons/fc";
export default function Nav(){
    return(
        <>
     
        <nav className="w-full  max-w-full h-min nav overflow-hidden">
  <ul className="flex py-7 place-content-around items-center">
    <li className="flex justify-center items-center gap-2">
      <Link to="/Home"><FcHome />Home</Link>
    </li>
    <li className="flex justify-center items-center gap-2">
      <Link to="/Mobile"><CiMobile3 />Mobile</Link>
    </li>
    <li className="flex justify-center items-center gap-2">
      <Link to="/Clothes"><GiClothes />Clothes</Link>
    </li>
    <li className="flex justify-center items-center gap-2">
      <Link to="/Laptop"><GiLaptop />Laptop</Link>
    </li>
    <li className="flex justify-center items-center gap-2">
      <Link to="/Furniture"><LuSofa />Furniture</Link>
    </li>
    <li className="flex justify-center items-center gap-2">
      <Link to="/Contact"><FcBusinessContact />Contact Us</Link>
    </li>
  </ul>
</nav>
        </>
    )
}