import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import Dashboard from '@/components/dashboard/Dashboard';
import FacebookAdGenerator from '@/components/marketing/FacebookAd';
import Templates from '@/components/templates/Templates';

const App = () => {
  return (
    <Router basename="/adCopyGen2">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/facebook" element={<FacebookAdGenerator />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;