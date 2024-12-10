import React from 'react';
import { AuthProvider, AuthContainer, useAuth } from './components/auth/AuthComponents';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import FacebookAdGenerator from './components/marketing/FacebookAd';
import Templates from './components/templates/Templates';

const MainApp = () => {
  const { currentView } = useAuth();

  const renderContent = () => {
    switch (currentView) {
      case 'app':
      case 'dashboard':
        return <Dashboard />;
      case 'facebook':
        return <FacebookAdGenerator />;
      case 'templates':
        return <Templates />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AuthContainer>
        <MainApp />
      </AuthContainer>
    </AuthProvider>
  );
};

export default App;