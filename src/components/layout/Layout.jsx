import React from 'react';
import { Home, Settings, Layout as LayoutIcon, BarChart3, MousePointerClick, LogOut } from 'lucide-react';
import { useAuth } from '../auth/AuthComponents';

const Layout = ({ children }) => {
  const { logout, setCurrentView, currentView } = useAuth();

  const handleNavClick = (view) => {
    setCurrentView(view);
  };

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
                <NavButton
                  icon={<Home className="h-5 w-5" />}
                  text="Dashboard"
                  isActive={currentView === 'app'}
                  onClick={() => handleNavClick('app')}
                />
                <NavButton
                  icon={<LayoutIcon className="h-5 w-5" />}
                  text="Templates"
                  isActive={currentView === 'templates'}
                  onClick={() => handleNavClick('templates')}
                />
                <NavButton
                  icon={<MousePointerClick className="h-5 w-5" />}
                  text="Facebook Ads"
                  isActive={currentView === 'facebook'}
                  onClick={() => handleNavClick('facebook')}
                />
                <NavButton
                  icon={<BarChart3 className="h-5 w-5" />}
                  text="Analytics"
                  isActive={currentView === 'analytics'}
                  onClick={() => handleNavClick('analytics')}
                />
                <NavButton
                  icon={<Settings className="h-5 w-5" />}
                  text="Settings"
                  isActive={currentView === 'settings'}
                  onClick={() => handleNavClick('settings')}
                />
              </div>
            </div>
            <div className="ml-6 flex items-center">
              <button
                onClick={logout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
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

const NavButton = ({ icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center px-1 pt-1 text-sm font-medium gap-2 ${isActive
      ? 'text-blue-600 border-b-2 border-blue-600'
      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Layout;