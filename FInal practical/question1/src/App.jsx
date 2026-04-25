import React from 'react';
import ActivityCard from './ActivityCard';
import './App.css';

const App = () => {
  const activities = [
    {
      id: "1",
      title: 'This is my breakfast time',
      date: '25-04-26',
      category: 'Food'
    },
    {
      id: "2",
      title: 'This is my lunch time',
      date: '25-04-26',
      category: 'Food'
    },
    {
      id: "3",
      title: 'This is my playing time',
      date: '25-04-26',
      category: 'Playing'
    },
    {
      id: "4",
      title: 'This is my dinner time',
      date: '25-04-26',
      category: 'Food'
    }
  ];

  return (
    <div className="app-container">
        <h1>My Activities</h1>
      <div className="activity-list">
        {activities.map((activity) => (
          <ActivityCard 
            key={activity.id}
            title={activity.title}
            date={activity.date}
            category={activity.category}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
