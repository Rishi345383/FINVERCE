import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Percent,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export default function Analysis() {
  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+15.3%',
      trend: 'up',
      details: 'Compared to previous quarter',
      color: 'green'
    },
    {
      title: 'Operating Margin',
      value: '24.8%',
      trend: 'down',
      details: '2.1% decrease',
      color: 'red'
    },
    {
      title: 'Cash Position',
      value: '$2.4M',
      trend: 'up',
      details: '$400K increase',
      color: 'green'
    }
  ];

  const insights = [
    {
      title: 'Revenue Streams',
      description: 'Product A continues to be the main revenue driver, contributing 45% of total revenue',
      action: 'View Details'
    },
    {
      title: 'Cost Structure',
      description: 'Operating expenses have increased by 12% due to new market expansion',
      action: 'Analyze Costs'
    },
    {
      title: 'Growth Opportunities',
      description: 'Market analysis suggests potential for 25% growth in APAC region',
      action: 'Explore Markets'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              {metric.trend === 'up' ? (
                <TrendingUp className={`h-5 w-5 text-${metric.color}-500`} />
              ) : (
                <TrendingDown className={`h-5 w-5 text-${metric.color}-500`} />
              )}
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{metric.value}</p>
            <p className={`mt-1 text-sm text-${metric.color}-600`}>{metric.details}</p>
          </div>
        ))}
      </div>

      {/* Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Analysis</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Revenue trend chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Expense Breakdown</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Expense distribution chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
          <AlertCircle className="h-5 w-5 text-blue-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{insight.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{insight.description}</p>
              <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700">
                {insight.action}
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Performance Indicators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500">Revenue per Employee</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">$250K</p>
            <p className="text-sm text-green-600">+5% vs last year</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Percent className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-500">Customer Retention</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">94%</p>
            <p className="text-sm text-blue-600">+2% vs last quarter</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-gray-500">Market Share</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">28%</p>
            <p className="text-sm text-purple-600">Leading in 3 segments</p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-500">Risk Score</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">Low</p>
            <p className="text-sm text-yellow-600">Stable outlook</p>
          </div>
        </div>
      </div>
    </div>
  );
}