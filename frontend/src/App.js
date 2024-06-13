import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Ensure this path is correct
import Register from './Register'; // Ensure this path is correct
import Admin from './Admin'; // Ensure this path is correct
import Dashboard from './Dashboard'; // Ensure this path is correct
import GraphsPage from './GraphsPage'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/GraphsPage" element={<GraphsPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;