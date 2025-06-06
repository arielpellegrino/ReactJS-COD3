import React from "react";
import "./Card.css";

export default function Card (props) {
  const cardStyle = { 
    backgroundColor: props.color || '#F00',

  }

  return (
    <div className="Card" style={cardStyle} cardBorder={{borderColor: props.color || '#00FF00'}}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
