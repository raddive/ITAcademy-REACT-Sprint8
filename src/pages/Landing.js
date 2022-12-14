import React from "react";
import {Link } from "react-router-dom";

import Header from "./Header";

export default function Landing () { 
    return (
        <div>
            <Header />
            <div className="hero h-96  bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">WELCOME!!!</h1>
                        <nav>
                            <Link to="/main"><button className="btn btn-success mt-5">STARSHIPS</button></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};