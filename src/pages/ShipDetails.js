import React from "react";
import { useLocation } from 'react-router-dom'

import Header from "./Header";
import StarShipDetails from "../components/StarshipDetails";
import Footer from "./Footer";

export default function ShipDetails (props) { 
    const location = useLocation();
    return (
        <div className="Img_background">
            <Header userName={props.userName} logOut={props.logOut} setUser={props.setUser}/>
            <StarShipDetails
                ship={location.state?.ship}
                id={location.state?.id} />
        </div>
    );
};