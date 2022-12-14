import React from "react";
import "../css/Loading.css"


export default function Loading () { 
    return (
        <div className="center_div">
            <p className="text-2xl">LOADING...</p>
            <div className="r2d2">
                <div className="head">
                    <div className="eye">
                        <div className="circle-1">
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item">
                            <div className="circle"></div>
                        </div>
                        <div className="item"></div>
                    </div>
                </div>
                <div className="body">
                    <div className="list">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="oval"></div>
                </div>
                <div className="arm-1">
                    <div className="divisor"></div>
                </div>
                <div className="arm-2">
                    <div className="divisor"></div>
                </div>
                <div className="leg"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
};