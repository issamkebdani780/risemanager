import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardHeader from './components/DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Sidebar - Now Floating */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-72 transition-all duration-500">
        {/* Header - Now Floating */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto mt-24">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
