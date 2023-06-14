import React from "react";
import katieimage from "./images/katie.jpg";
import Starimage from "./images/star.png";
export default function Card(){
    return(
        <div className="Card">
            <img src={katieimage}
            alt="katieimage" className="card--image"/>
            <div className="card--states">
                <img src={Starimage}
            alt="Starimage" className="star--image"/>
            <span>5.0</span>
            <span className="grey">(6) • </span>
            <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Zaferes</p>
            <p> <span className="bold" >From $136 </span>/ person</p>
        </div>
    );
}