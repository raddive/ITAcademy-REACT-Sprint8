import React from "react";

import { imgPath,apiBaseUrl,peopleURL } from "../variables/variables";

export default function Pilots (props) { 
    const listPilots = props.pilots.map((item,index) => {
        let sAux= item.replace(apiBaseUrl+"people/","").replace("/","");
        const imgUrl=imgPath+"characters/"+sAux+".jpg";
        const characterURL = peopleURL+sAux;
        return (
            <div class="avatar p-3">
                <div class="w-24 rounded-full">
                    <a href={characterURL}><img src={imgUrl}/></a>
                </div>
            </div>
        )
    })


    return (
        <div>
            <span className="text-2xl text-black">pilots :</span>
            <br/>
            {listPilots}
        </div>
    );
};