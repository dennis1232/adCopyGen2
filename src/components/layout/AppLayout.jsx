import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, Layout, BarChart3, MousePointerClick } from 'lucide-react';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600">AdCopyGen</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink to="/">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </NavLink>
                <NavLink to="/templates">
                  <Layout className="h-5 w-5" />
                  <span>Templates</span>
                </NavLink>
                <NavLink to="/facebook">
                  <MousePointerClick className="h-5 w-5" />
                  <span>Facebook Ads</span>
                </NavLink>
                <NavLink to="/settings">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 gap-2"
  >
    {children}
  </Link>
);

export default AppLayout;