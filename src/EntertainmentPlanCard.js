// EntertainmentPlanCard.jsx
import React from 'react';
import './EntertainmentPlanCard.css';

const EntertainmentPlanCard = ({ title, description, price, features }) => {
  return (
    <div className="entertainment-plan-card">
      <div className="header">
        <h2>{title}</h2>
        <p className="price">{price}</p>
      </div>
      <div className="content">
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default EntertainmentPlanCard;
