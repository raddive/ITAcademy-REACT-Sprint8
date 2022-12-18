import React from "react";

export default function Films (props) {
    
    const listFilms = props.films.map((item,index) => {
        return (
            <p>{item}</p>
        )
    })



    return (
        <div>
            <span className="text-2xl text-black">films</span>
            {listFilms}
        </div>
    );
};