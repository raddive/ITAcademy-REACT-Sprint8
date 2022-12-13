import React from "react";

export default function StarshipsItemList (props) { 
    return (
        <div className="container mx-auto flex">
            <p className="w-1/6"/>
            <div className="card w-4/6 bg-base-100 shadow-xl pt-10 mt-5">
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.model}</p>
                </div>
            </div>
            <p className="w-1/6"/>
        </div>
    );
};