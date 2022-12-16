import React from "react";

import Header from "./Header";
import ShipList from "./ShipList";
import Footer from "./Footer";

export default function Main (props) { 
    return (
        <div className="Img_background">
            <Header userName={props.userName} logOut={props.logOut} setUser={props.setUser}/>
            <ShipList userName={props.userName}/>
        </div>
    );
};