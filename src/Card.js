import React from "react";
import Starimage from "./images/star.png";

export default function Card(props){
    return(
        <div className="Card">
            
            <img src={`./images/${props.img}`}
            alt="img" className="card--image"/>
            <div className="card--states">
                <img src={Starimage}
            alt="Starimage" className="star--image"/>
            <span>{props.rating}</span>
            <span className="grey">({props.reviewCount}) • </span>
            <span className="grey"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold" >From ${props.price} </span>/ person</p>
        </div>
    );
}