import React from "react";
import {Link } from "react-router-dom";

import starWarsLogo from '../images/star_wars_logo.png';

export default function Header (props) { 

    return (
        <div className="Header flex-inline">
            <div className="flex w-full">
                <div className="flex-none w-1/4">
                </div>
                <div className="flex grow flex-auto justify-center">
                    <h1 className="Header--logo">
                        <img src={starWarsLogo} className="Logo" alt="logo" />
                    </h1>
                </div>
                    {props.userName !== "" &&
                        <div className="flex w-1/4">
                        <p className="flex-auto text-2xl text-end">{props.userName}</p> 
                        <p className="flex-auto text-2xl" onClick={props.logOut}>Log Out</p> 
                    </div>}
                    {props.userName === "" &&
                        <div className="flex w-1/4">
                            <p className="flex-auto text-2xl text-end"><Link to="/login">LOGIN </Link></p> 
                            <p className="flex-auto text-2xl"><Link to="/register">REGISTER</Link></p> 
                        </div>
                    }
            </div>
            <div className="container mx-auto max-w-full w-full border border-inherit py-2 mt-6">
                <div className="tabs">
                    <p className="w-1/4"></p> 
                    <p className="tab tab-lg tab-bordered gap-8 w-1/4 text-2xl"><Link to="/">HOME</Link></p> 
                    <p className="tab tab-lg tab-bordered w-1/4 text-2xl"><Link to="/main">STARSHIPS</Link></p> 
                    <p className="w-1/4"></p> 
                </div>
            </div>
        </div>
    );
};