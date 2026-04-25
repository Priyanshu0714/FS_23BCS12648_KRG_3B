import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ title, date, category }) => {
  return (
    <div className="activity-card">
      <h3 className="activity-title">{title}</h3>
      <p className="activity-category">{category}</p>
      <p className="activity-date">{date}</p>
    </div>
  );
};

export default ActivityCard;

