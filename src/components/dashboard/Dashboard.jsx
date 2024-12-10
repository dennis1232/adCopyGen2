import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Calendar } from 'lucide-react';
import CampaignRow from './CampaignRow';

const Dashboard = () => {
  const [stats] = useState({
    totalCampaigns: 12,
    activeAds: 5,
    conversionRate: '3.2%',
    lastMonth: '+15%'
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Campaigns"
          value={stats.totalCampaigns}
          icon={<Calendar className="h-6 w-6" />}
          trend="+2 this month"
        />
        <StatCard
          title="Active Ads"
          value={stats.activeAds}
          icon={<TrendingUp className="h-6 w-6" />}
          trend="3 pending review"
        />
        <StatCard
          title="Conversion Rate"
          value={stats.conversionRate}
          icon={<BarChart3 className="h-6 w-6" />}
          trend="+0.8% from last week"
        />
        <StatCard
          title="Audience Growth"
          value={stats.lastMonth}
          icon={<Users className="h-6 w-6" />}
          trend="Month over Month"
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Campaigns</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <CampaignRow
                name="Summer Sale 2024"
                platform="Facebook"
                status="Active"
                performance="+24% CTR"
              />
              <CampaignRow
                name="Product Launch"
                platform="WhatsApp"
                status="Scheduled"
                performance="Pending"
              />
              <CampaignRow
                name="Holiday Special"
                platform="Telegram"
                status="Draft"
                performance="N/A"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0 text-blue-600">
          {icon}
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                {trend}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;