import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="gradient-border">
      <div className="card">
        {image && <img src={image} alt={title} className="card-img" />}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
