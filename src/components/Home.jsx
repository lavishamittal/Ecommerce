import React ,{ useState, useEffect } from "react";
import Cards from "./Cards.jsx"
export default function Home(){
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('/home.json')
                .then(response => response.json())
                .then(jsonData => {
                    setData(jsonData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        fetchData();
    }, []);

    return(
        <>
       <h1>Home Page</h1>
        <Cards data={data}/>
        </>
    )
}