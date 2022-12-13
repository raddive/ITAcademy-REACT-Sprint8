import React from "react";
// import logo from '../images/atomo.png';
import logo from '../images/empire.png';

export default function NoPage () { 
    return (
        <div>
            <div className="Header">
                <img src={logo} className="SpinLogo" alt="logo" />
            </div>
            <p className="text-6xl">404 - No page found</p>
        </div>
    );
};