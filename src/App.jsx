import React from 'react';
import { AuthProvider, AuthContainer } from './components/auth/AuthComponents';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <AuthProvider>
      <AuthContainer>
        <Dashboard />
      </AuthContainer>
    </AuthProvider>
  );
};

export default App;