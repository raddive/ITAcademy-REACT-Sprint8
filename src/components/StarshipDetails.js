import React, { useEffect, useState } from "react";
import { useRef } from 'react';

import Pilots from "./Pilots";
import Films from "./Films";

import { imgPath,noImgUrl } from "../variables/variables";

export default function StarShipDetails (props) { 

    const imgRef = useRef();
    const imgUrl=imgPath+"starships/"+props.id+".jpg";
    const onImageError = () => imgRef.current.src=noImgUrl;

    const [shipData,setShipData] =useState(props.ship);

    return (
        <div className="flex items-center card shadow-xl pt-3">
            <figure className="border-b-4 border-red-500 w-2/3" ><img className="w-1/2" ref={imgRef} src={imgUrl} alt={shipData.name} onError={onImageError} /></figure>
            <div className="card-body w-2/3 bg-zinc-50">
                <p className="flex text-4xl text-black">{shipData.name}</p>
                <div className="grid grid-cols-2 text-left w-full text-xl">
                    {Object.keys(shipData).map((key, index) => {
                        return (
                            <>
                                {key!=="films" && key!=="pilots" && (
                                    <div key={index}>
                                        <span className="text-2xl text-black">{key}</span> : {shipData[key]}
                                    </div>
                                    )
                                }
                            </>
                        )
                        })
                    }
                    {Object.keys(shipData).map((key, index) => {
                        return (
                            <>
                                {key==="films" && (<Films films={shipData[key]} />)}
                                {key==="pilots" && (<Pilots pilots={shipData[key]} />)}
                            </>
                        )
                        })
                    }
                </div>
            </div>
       </div>
    );
};