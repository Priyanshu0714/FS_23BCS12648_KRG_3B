import React, { memo } from 'react';

const CounterDisplay = memo(({ count, goal, onAdd, onRemove, onReset }) => {
  console.log("CounterDisplay rendered!"); 

  return (
    <div style={styles.trackerCard}>
      <h2>Water Tracker</h2>
      <p style={styles.progressText}>{count}/{goal} glasses completed</p>
      
      {count >= goal && <p style={styles.successMessage}>Goal Reached!</p>}
      
      <div style={styles.buttonGroup}>
        <button onClick={onRemove} style={styles.btn} disabled={count === 0}>-</button>
        <button onClick={onAdd} style={styles.btn}>+</button>
      </div>
      
      <button onClick={onReset} style={styles.resetBtn}>Reset Tracker</button>
    </div>
  );
});

export default CounterDisplay;

const styles = {
  trackerCard: { padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '1.5rem' },
  progressText: { fontSize: '1.5rem', fontWeight: '600', margin: '1rem 0' },
  successMessage: { color: '#16a34a', fontWeight: 'bold', fontSize: '1.2rem' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' },
  btn: { padding: '0.5rem 1.5rem', fontSize: '1.5rem', backgroundColor: '#616161', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  resetBtn: { padding: '0.5rem 1rem', backgroundColor: '#616161', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }
};