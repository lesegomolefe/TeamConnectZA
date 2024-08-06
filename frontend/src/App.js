import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './Admin'; // Ensure this path is correct
import Dashboard from './Dashboard'; // Import the Dashboard component
import GraphsPage from './GraphsPage'; // Ensure this path is correct
import InternProfile from './InternProfile'; // Ensure this path is correct
import Login from './Login'; // Ensure this path is correct
import Register from './Register'; // Ensure this path is correct
import TrackProgress from './TrackProgress';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this line for the Dashboard */}
        <Route path="/internProfile" element={<InternProfile />} />
        <Route path="/track-progress/:personId" element={<TrackProgress />} />
        <Route path="/GraphsPage" element={<GraphsPage />} />
      </Routes>
    </Router>
  );
};

export default App;