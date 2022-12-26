import React from "react";
// import logo from '../images/atomo.png';
import logo from '../images/empire.png';

export default function NoPage () { 
    return (
        <div>
            <div className="Header">
                <img src={logo} className="SpinLogoBig" alt="logo" />
            </div>
            <p className="text-6xl">404 - No page found</p>
            <p className="text-4xl">May the force be with you</p>
        </div>
    );
};