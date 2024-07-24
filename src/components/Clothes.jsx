import React from 'react';
import {useState,useEffect} from "react"
import Cards from "./Cards.jsx"
export default function Clothes(){
    const [data,Setdata] = useState(null);
    useEffect(()=>{
        const fetchapi =()=>{
            fetch("./clothes.json").
            then(response => response.json()).
            then(jsondata =>{
                Setdata(jsondata);
            }).catch(err=>{console.error("this is errror")})
        }
        fetchapi();
    },[])
    return (
        <>
        
         <Cards data={data}/>
       
        </>

    )
}