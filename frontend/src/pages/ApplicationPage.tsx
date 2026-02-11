import React, { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { useApplications } from "../hooks/useApplications";
import ApplicationForm from "../components/ApplicationForm";
import StatusFilter from "../components/StatusFilter";
import Dashboard from "../components/Dashboard";
import type { ApplicationStatus } from "../types/Application";
import "./ApplicationPage.css";

function ApplicationPage() {
  const { apps, deleteApplication, updateStatus, addApplication } = useApplications();

  const [filterStatus, setFilterStatus] = useState<ApplicationStatus | "All">("All");

  const filteredApps = filterStatus === "All"
    ? apps
    : apps.filter((app) => app.status === filterStatus);

  return (
    <div className="application-page">
      <div className="page-container">
        {/* Header */}
        <header className="page-header">
          <h1>📋 Trackly</h1>
          <p>Manage your job applications in one place</p>
        </header>

        {/* Dashboard */}
        <Dashboard apps={apps} />

        {/* Add Form */}
        <ApplicationForm onAdd={addApplication} />

        {/* Applications List */}
        <div className="applications-section">
          <h2>My Applications</h2>

          <StatusFilter value={filterStatus} onChange={setFilterStatus} />

          {filteredApps.length > 0 ? (
            <div className="applications-grid">
              {filteredApps.map((app) => (
                <ApplicationCard
                  key={app.id}
                  application={app}
                  onDelete={deleteApplication}
                  onStatusChange={updateStatus}
                />
              ))}
            </div>
          ) : (
            <div className="applications-empty">
              <div className="applications-empty-icon">🔍</div>
              <h3>No applications found</h3>
              <p>
                {filterStatus === "All"
                  ? "Start by adding your first job application!"
                  : `No applications with status "${filterStatus}"`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplicationPage;
