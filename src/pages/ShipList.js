import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import StarshipsItemList from "../components/StarshipsItemList";
import Loading from "./Loading";

import { apiUrl } from "../variables/variables";

export default function ShipList (props) { 

//USE STATE
    const [sNextURL, setNextURL] = useState("");
    const [starships, setStarships] = useState([]);

    const [bMore,setbMore] = useState(true);    
    const [bLoading, setbLoading] = useState(true);

//USE EFFECT
    //Leyendo data desde una API
    //utilizamoa useEffect,[] porque solo se llama una vez
    useEffect( () => {
        const lsShips =JSON.parse(localStorage.getItem("CurrentShips"));
        const lsNextURL =localStorage.getItem("NextURL")==="null"?null:localStorage.getItem("NextURL");

        if(needToReload())
        {
            loadDataFromURL(apiUrl);
        }
        else
        {
            setNextURL(lsNextURL);
            setStarships(()=> {return [...lsShips]});            
        }
    },[]);

    useEffect( () => {
        
        sNextURL?setbMore(true):setbMore(false);
    },[sNextURL]);

    useEffect( () => {

        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        let sCurrentDate2=currentDate.toJSON();
        if(starships?.length)
        {
            setbLoading(false);
            localStorage.setItem("CurrentShips",JSON.stringify(starships));
            localStorage.setItem("CurrentShipsDate",sCurrentDate2);
            localStorage.setItem("NextURL",sNextURL);
        }
    },[starships]);


 //COMPONENTES
    const listStarShips = starships.map((item,index) => {
        let str = item.url;
        let sAux= str.replace(apiUrl,"").replace("/","");
        return (
            <StarshipsItemList key={index}
                id={sAux}
                ship={item}
                index={index}
            />
        )
    })



//LOGICA

    function needToReload()
    {
        const lsShips =JSON.parse(localStorage.getItem("CurrentShips"));
        const lsJSONDate =localStorage.getItem("CurrentShipsDate");
        const lsDate =new Date(lsJSONDate);
        const curDate =new Date();
        if(curDate<lsDate && lsShips?.length)
            return false;
        else
            return true;
    }

    function loadDataFromURL(sURL)
    {
        if(sURL)
        {
            setbLoading(true);
            fetch(sURL)
            .then(res => res.json())
            .then(data =>   { 
                setNextURL(data.next);
                setStarships(prevData => {
                    if(JSON.stringify(prevData[0]) === JSON.stringify(data.results[0]))
                        return data.results;
                    else
                        return [...prevData,...data.results]
                });
                
            });
        }
        else
        {
            setbMore(false);
            setbLoading(false);
        }
    }

    function loadMore(){
        setbLoading(true);
        const sAux=localStorage.getItem("NextURL");
        const sLocalStorage=sAux==="null"?null:sAux;
        const sNext=sNextURL;

        let sURL=null;
        if(sLocalStorage)
            sURL=sLocalStorage;
        else if(sNext)
            sURL=sNext;

        loadDataFromURL(sURL);
        setbLoading(false);
    }

    function clearLocalStorage(){
        localStorage.clear();
    }

    function refreshFromAPI(){
        clearLocalStorage();
        loadDataFromURL(apiUrl);
    }


//SCROLL INFINITO
   const [sentryRef] = useInfiniteScroll({
        bLoading, 
        hasNextPage: bMore ,
        delayInMs:100,
        onLoadMore: loadMore,
        // disabled :true,
      })

    return (
        // <div ref={rootRef}>
        <div>
            <div>
                {!bLoading && (
                    <div >
                    {/* <div> */}
                        {listStarShips}
                        {bMore && <span ref={sentryRef} >Loading more starships...</span>}
                        <div className="mt-5 container mx-auto grid justify-items-end w-2/3">
                            {bMore && <button className="btn btn-active btn-ghost" onClick={loadMore}>VIEW MORE</button>}
                            {!bMore && 
                                <div className="alert alert-info shadow-lg">
                                    <span>No more starships!!!!!.</span>
                                </div>
                            }
                            <button  className="btn btn-active btn-ghost mt-3" onClick={refreshFromAPI}>Refresh data from Api</button>                        
                        </div>
                    </div>)
                }
                {bLoading && (
                    <Loading />)
                }
            </div>
        </div>
    );
};