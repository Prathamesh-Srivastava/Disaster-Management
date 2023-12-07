import React from "react";
import "./DisasterCard.css"
const Card = (props) => {
    return (
        <div className="card">
            <div className="heading">{props.head}</div>
            <div className="bottom">
                <div className="content">{props.content}</div>
            </div>
        </div>
    );
}

export default Card;