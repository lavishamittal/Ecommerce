import React ,{useState,useEffect} from 'react';
import Cards from "./Cards.jsx"
export default function Product(){
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('/product.json')
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
    return (
        
        <>
        <Cards data={data}/>
        </>

    )
}