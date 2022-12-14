import React from "react";

import Header from "./Header";
import ShipList from "./ShipList";
import Footer from "./Footer";

export default function Main () { 
    return (
        <div className="Img_background">
            <Header/>
            <ShipList />
            <Footer />
        </div>
    );
};