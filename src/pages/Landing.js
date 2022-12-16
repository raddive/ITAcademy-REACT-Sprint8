import React from "react";
import {Link } from "react-router-dom";

import Header from "./Header";

export default function Landing (props) { 
    return (
        <div className="h-screen">
            <Header userName={props.userName} logOut={props.logOut} setUser={props.setUser}/>
            <div className="grid place-items-center h-1/2 ">
                <div>
                    <h1 className="text-5xl font-bold">WELCOME!!!</h1>
                    <nav>
                        <Link to="/main"><button className="btn btn-active btn-ghost mt-5">STARSHIPS</button></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};