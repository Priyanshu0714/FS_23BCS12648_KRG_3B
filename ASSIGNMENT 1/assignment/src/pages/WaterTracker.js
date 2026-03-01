import React, { useState, useEffect, useCallback } from 'react';
import CounterDisplay from '../components/CounterDisplay';

const WaterTracker = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('waterCount');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem('waterGoal');
    return savedGoal ? parseInt(savedGoal, 10) : 8;
  }); 

  useEffect(() => {
    localStorage.setItem('waterCount', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('waterGoal', goal);
  }, [goal]);

  const handleAdd = useCallback(() => setCount((c) => c + 1), []);
  const handleRemove = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);
  const handleReset = useCallback(() => setCount(0), []);

  return (
    <div style={{ textAlign: 'center' }}>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="goalInput" style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Set Daily Goal: </label>
        <input 
          id="goalInput"
          type="number" 
          value={goal} 
          onChange={(e) => setGoal(parseInt(e.target.value) || 1)} 
          style={{ width: '60px', padding: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', textAlign: 'center' }}
          min="1"
        />
      </div>

      <CounterDisplay 
        count={count} 
        goal={goal} 
        onAdd={handleAdd} 
        onRemove={handleRemove} 
        onReset={handleReset} 
      />

    </div>
  );
};

export default WaterTracker;