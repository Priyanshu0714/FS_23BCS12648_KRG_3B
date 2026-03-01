import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/dashboard/water" style={styles.link}>Water Tracker</Link>
      </div>
      <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#616161', borderRadius: '8px', marginBottom: '2rem' },
  link: { textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' },
  logoutBtn: { padding: '0.5rem 1rem',color:'white', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};