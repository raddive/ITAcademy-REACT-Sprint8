import React from "react";
import { useLocation } from 'react-router-dom'

import Header from "./Header";
import StarShipDetails from "../components/StarshipDetails";
import Footer from "./Footer";

export default function ShipDetails () { 
    const location = useLocation();
    return (
        <div className="Img_background">
            <Header/>
            <StarShipDetails
                ship={location.state?.ship}
                id={location.state?.id} />
            <Footer />
        </div>
    );
};