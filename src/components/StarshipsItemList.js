import React from "react";
import {Link } from "react-router-dom";

export default function StarshipsItemList (props) { 
    const locationData = {
        id: props.id,
        ship : props.ship
      }
    return (
        <div className="container mx-auto flex">
            <p className="w-1/6"></p>
            <div className="card w-4/6 bg-base-100 shadow-xl pt-10 mt-5">
                <Link to="/StarshipDetails" state={locationData}>
                    <div className="card-body">
                        <h2 className="card-title">{props.ship?.name}</h2>
                        <p>{props.ship?.model}</p>
                    </div>
                </Link>
            </div>
            <p className="w-1/6"></p>
        </div>
    );
};