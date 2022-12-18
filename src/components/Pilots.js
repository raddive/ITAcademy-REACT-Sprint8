import React from "react";

export default function Pilots (props) { 
    const listPilots = props.pilots.map((item,index) => {
        return (
            <p><a href={item}>{item}</a></p>
        )
    })



    return (
        <div>
            <span className="text-2xl text-black">pilots</span>
            {listPilots}
        </div>
    );
};