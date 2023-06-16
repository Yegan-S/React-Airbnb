import React from "react";
import Starimage from "./images/star.png";


export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../image/${props.img}`}
            alt="img" className="card--image"/>
            <div className="card--stats">
                <img src={Starimage}
            alt="Starimage" className="star--image"/>
            <span>{props.rating}</span>
            <span className="grey">({props.reviewCount}) • </span>
            <span className="grey"> {props.location}</span>

            </div>

            <p className="card--title">{props.title}</p>
            <p> <span className="bold card--price" >From ${props.price} </span>/ person</p>
        
        </div>
    );
}