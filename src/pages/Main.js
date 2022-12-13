import React from "react";

import Header from "./Header";
import ShipList from "./ShipList";
import Footer from "./Footer";

export default function Main () { 
    return (
        <div>
            <Header/>
            <ShipList />
            <Footer />
        </div>
    );
};