import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BarChart3, Settings, FileText, PieChart, Menu } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Analysis from './pages/Analysis';
import SettingsPage from './pages/Settings';

function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-30">
      <div className="flex items-center space-x-3 px-6 py-4 border-b border-gray-200">
        <BarChart3 className="h-8 w-8 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-900">Financial AI</h1>
      </div>
      <nav className="mt-6 px-3">
        <Link
          to="/"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 ${
            isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <PieChart className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/reports"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 ${
            isActive('/reports') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FileText className="h-5 w-5" />
          <span>Reports</span>
        </Link>
        <Link
          to="/analysis"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 ${
            isActive('/analysis') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <BarChart3 className="h-5 w-5" />
          <span>Analysis</span>
        </Link>
        <Link
          to="/settings"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 ${
            isActive('/settings') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/reports':
        return 'Reports';
      case '/analysis':
        return 'Analysis';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-20">
      <div className="flex items-center justify-between h-full px-6">
        <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;