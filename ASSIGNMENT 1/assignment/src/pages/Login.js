import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'testing_token');
    navigate('/dashboard');
  };

  return (
    <div style={styles.page}>
      <h1>Login Page</h1>
      <button onClick={handleLogin} style={styles.btn}>Login</button>
      <div style={styles.owner}>By: Priyanshu Choudhary - 23bcs12648</div>
    </div>
  );
};

export default Login;

const styles = {
  page: { textAlign: 'center', marginTop: '5rem' },
  btn: { padding: '0.75rem 2rem', fontSize: '1.2rem', backgroundColor: '#616161', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  owner: {marginTop: '100px'}
};