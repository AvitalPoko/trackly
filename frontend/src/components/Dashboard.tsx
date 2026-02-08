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
      <h2>Dashboard</h2>
      <p>Total Applications: {totalApplications}</p>

      {apps.length > 0 && (
        <div className="chart-container">
          <h3>Status Distribution</h3>
          <div style={{ height: '300px', position: 'relative' }}>
            <Pie data={chartData} options={options} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;