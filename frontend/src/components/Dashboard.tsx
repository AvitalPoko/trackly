import React from "react";
import type { Application } from "../types/Application";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DashboardProps {
  apps: Application[];
}

function Dashboard({ apps }: DashboardProps) {
  const totalApplications = apps.length;

  const statusDistribution = apps.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const COLORS: Record<string, string> = {
    Applied: "#6b7280",
    Interviewing: "#f59e0b",
    Offered: "#10b981",
    Rejected: "#ef4444",
    Accepted: "#8b5cf6"
  };

  const chartData = {
    labels: Object.keys(statusDistribution),
    datasets: [{
      data: Object.values(statusDistribution),
      backgroundColor: Object.keys(statusDistribution).map(status => COLORS[status]),
      borderColor: '#fff',
      borderWidth: 2,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>📊 Dashboard</h2>
        <p>Track your job search progress</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {/* Total Applications Card */}
        <div className="stat-card stat-card-blue">
          <div className="stat-card-content">
            <p>Total Applications</p>
            <p className="stat-value">{totalApplications}</p>
          </div>
          <div className="stat-icon">📝</div>
        </div>

        {/* Interviewing Card */}
        <div className="stat-card stat-card-amber">
          <div className="stat-card-content">
            <p>Interviewing</p>
            <p className="stat-value">{statusDistribution.Interviewing || 0}</p>
          </div>
          <div className="stat-icon">💼</div>
        </div>

        {/* Offers Card */}
        <div className="stat-card stat-card-green">
          <div className="stat-card-content">
            <p>Offers</p>
            <p className="stat-value">{statusDistribution.Offered || 0}</p>
          </div>
          <div className="stat-icon">🎉</div>
        </div>
      </div>

      {/* Chart or Empty State */}
      {apps.length > 0 ? (
        <div className="chart-container">
          <h3>Status Distribution</h3>
          <div className="chart-wrapper">
            <div className="chart-inner">
              <Pie data={chartData} options={options} />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <h3>No applications yet</h3>
          <p>Start tracking your job applications to see statistics here</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;