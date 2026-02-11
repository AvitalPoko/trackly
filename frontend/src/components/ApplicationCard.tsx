import React from "react";
import type { Application, ApplicationStatus } from "../types/Application";
import "./ApplicationCard.css";

interface ApplicationCardProps {
  application: Application;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
}

function ApplicationCard({ application, onDelete, onStatusChange }: ApplicationCardProps) {
  const getStatusClass = (status: ApplicationStatus) => {
    const statusMap: Record<ApplicationStatus, string> = {
      Applied: "status-applied",
      Interviewing: "status-interviewing",
      Offered: "status-offered",
      Rejected: "status-rejected",
      Accepted: "status-accepted"
    };
    return statusMap[status];
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the application to ${application.company}?`)) {
      onDelete(application.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="application-card">
      {/* Header */}
      <div className="card-header">
        <div className="card-info">
          <h3 className="card-company">{application.company}</h3>
          <p className="card-role">{application.role}</p>
        </div>
        <button
          onClick={handleDelete}
          className="delete-btn"
          aria-label="Delete application"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Date */}
      <div className="card-date">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Applied on {formatDate(application.appliedDate)}
      </div>

      {/* Status Selector */}
      <div className="status-section">
        <label htmlFor={`status-${application.id}`}>Status</label>
        <select
          id={`status-${application.id}`}
          value={application.status}
          onChange={(e) => onStatusChange(application.id, e.target.value as ApplicationStatus)}
          className={`status-select ${getStatusClass(application.status)}`}
        >
          <option value="Applied">📝 Applied</option>
          <option value="Interviewing">💼 Interviewing</option>
          <option value="Offered">🎉 Offered</option>
          <option value="Rejected">❌ Rejected</option>
          <option value="Accepted">✅ Accepted</option>
        </select>
      </div>
    </div>
  );
}

export default ApplicationCard;