import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  AlertTriangle, 
  FileText,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">$1.2M</p>
          <p className="mt-1 text-sm text-green-600">+15.3% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Expenses</h3>
            <DollarSign className="h-5 w-5 text-red-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">$800K</p>
          <p className="mt-1 text-sm text-red-600">+5.2% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Profit Margin</h3>
            <AlertCircle className="h-5 w-5 text-blue-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">33%</p>
          <p className="mt-1 text-sm text-blue-600">+2.1% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Active Reports</h3>
            <FileText className="h-5 w-5 text-purple-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
          <p className="mt-1 text-sm text-purple-600">3 pending review</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Financial Overview</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">Monthly</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Quarterly</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Yearly</button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization will be displayed here</p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
            <AlertCircle className="h-5 w-5 text-blue-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-700">Revenue increased by 15% compared to last quarter</p>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
              <p className="text-sm text-yellow-700">Unusual expense pattern detected in marketing</p>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <FileText className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <p className="text-sm text-blue-700">Cash flow projections suggest strong Q4</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
          <MessageSquare className="h-5 w-5 text-purple-500" />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600">Ask me anything about your financial data...</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-3 text-blue-600 hover:text-blue-700">
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}