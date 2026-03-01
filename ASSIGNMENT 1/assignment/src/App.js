import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WaterTracker from './pages/WaterTracker';
import Navbar from './components/Navbar';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

const AuthenticatedLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '700px', margin: '0 auto', padding: '1rem' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <AuthenticatedLayout>
                  <Dashboard />
                </AuthenticatedLayout>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/water" 
            element={
              <ProtectedRoute>
                <AuthenticatedLayout>
                  <WaterTracker />
                </AuthenticatedLayout>
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}