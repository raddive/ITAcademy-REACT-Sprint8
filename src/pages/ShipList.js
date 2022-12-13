import React, { useEffect, useState } from "react";

import logo from '../images/empire.png';

import StarshipsItemList from "../components/StarshipsItemList";

export default function ShipList () { 
    const [starshipsData, setStarshipsData] = useState({})
    const [starships, setStarships] = useState([])
    
    const [bDataLoaded, setbDataLoaded] = useState(false);

//Leyendo data desde una API
//utilizamoa useEffect,[] porque solo se llama una vez
    useEffect( () => {
        console.log("useEffect ejecutado");
        fetch("https://swapi.dev/api/starships/")
        .then(res => res.json())
        .then(data => {setStarshipsData(data);
                       setStarships(data.results);
                       setbDataLoaded(true)})
    },[]);

    const listStarShips = starships.map(item => {
        return (
            <StarshipsItemList key={item.name}
                name={item.name}
                model={item.model}
            />
        )
    })


    return (
        <div>
            {bDataLoaded && (
                <div>
                    <p>{listStarShips}</p>
                </div>)
            }
            {!bDataLoaded && (
                <div>
                    <p className="text-3xl">LOADING....</p>
                </div>)
            }
        </div>
    );
};