import React, { useEffect, useState } from "react";

import StarshipsItemList from "../components/StarshipsItemList";
import Loading from "./Loading";

export default function ShipList () { 
    const [starshipsData, setStarshipsData] = useState({})
    const [starships, setStarships] = useState([])
    
    const [bDataLoaded, setbDataLoaded] = useState(false);

//Leyendo data desde una API
//utilizamoa useEffect,[] porque solo se llama una vez
    useEffect( () => {
        fetch("https://swapi.dev/api/starships/")
        .then(res => res.json())
        .then(data => {setStarshipsData(data);
                       setStarships(data.results);
                       setbDataLoaded(true)})
    },[]);

    const listStarShips = starships.map(item => {
        let str = item.url;
        let sAux= str.replace("https://swapi.dev/api/starships/","").replace("/","");
        return (
            <StarshipsItemList key={sAux}
                id={sAux}
                ship={item}
            />
        )
    })


    return (
        <div>
            {bDataLoaded && (
                <div>
                    {listStarShips}
                </div>)
            }
            {!bDataLoaded && (
                <Loading />)
            }
        </div>
    );
};