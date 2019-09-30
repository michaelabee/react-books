import React from "react";
import "./card.css";

function Card({name, author, image, description}) {
  
  return (
    <div className="cardStyle">
      <div>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <img src={image} alt={name}></img>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
