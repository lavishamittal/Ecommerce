import React,{useState,useEffect} from 'react';
import Cards from "./Cards.jsx";

export default function Laptop(){
    const [data,setdata]=useState(null);
    useEffect(()=>{
        const fetchdata=()=>{
            fetch('./laptop.json').
            then(response => response.json()).
            then(json => {setdata(json)}).
            catch(err=>console.log(err));
        };
        fetchdata();
    },[])
    return (
        <>
         <h1>This is page for Laptop </h1>
         <Cards data={data}/>
        </>

    )
}