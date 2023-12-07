import React from "react";
import "./DisasterCard.css"
const Card = (props) => {
    return (
        <div className="card">
            <div className="heading">{props.head}</div>
            <div className="content">{props.content}</div>
        </div>
    );
}

export default Card;