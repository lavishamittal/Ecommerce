import React,{ useState, useEffect } from 'react';
import Cards from "./Cards.jsx";
export default function Furniture(){
    const [data,setdata]=useState(null);
    useEffect(()=>{
        const fetchdata=()=>{
            fetch('./furniture.json').
            then(response => response.json()).
            then(json => {setdata(json)}).
            catch(err=>console.log(err));
        };
        fetchdata();
    },[])
    return (
        <>
        <h1>This is page for furniture </h1>
        <Cards data={data}/>
        </>

    )
}