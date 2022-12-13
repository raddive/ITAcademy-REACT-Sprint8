import React from "react";
import {Link } from "react-router-dom";

import starWarsLogo from '../images/star_wars_logo.png';

export default function Header () { 
    return (
        <div>
            <h1 className="Header">
                <img src={starWarsLogo} className="Logo" alt="logo" />
            </h1>
            <div className="container mx-auto">
                <div className="tabs">
                    <p className="w-1/4"></p> 
                    <p className="tab tab-lg tab-bordered gap-8 w-1/4"><Link to="/">HOME</Link></p> 
                    <p className="tab tab-lg tab-bordered w-1/4"><Link to="/main">STARSHIPS</Link></p> 
                    <p className="w-1/4"></p> 
                </div>
            </div>
        </div>
    );
};