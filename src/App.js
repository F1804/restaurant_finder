// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Index from './Index1'; // Import the Index component
import BusinessOwnerDashboard from './BusinessOwnerDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />  {/* This sets Index as the homepage */}
                <Route path="/login" element={<Login />} />
                <Route path="/BusinessOwnerDashboard" element={<BusinessOwnerDashboard />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
