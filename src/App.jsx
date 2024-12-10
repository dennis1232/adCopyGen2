import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './components/dashboard/Dashboard';
import FacebookAdGenerator from './components/marketing/FacebookAd';

const App = () => {
  return (
    <Router basename="/adCopyGen2">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/facebook" element={<FacebookAdGenerator />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;