import React from "react";

import { imgPath,apiBaseUrl,shipsURL } from "../variables/variables";
export default function Films (props) {
    
    const listFilms = props.films.map((item,index) => {

        let sAux= item.replace(apiBaseUrl+"films/","").replace("/","");
        const imgUrl=imgPath+"films/"+sAux+".jpg";
        const shipURL = shipsURL+sAux;
        return (
            <div class="avatar p-3">
                <div class="w-24 rounded-full">
                    <a href={shipURL}><img src={imgUrl}/></a>
                </div>
            </div>
        )
    })



    return (
        <div>
            <span className="text-2xl text-black">films</span>
            <br/>
            {listFilms}
        </div>
    );
};