import React from "react";
import type { ApplicationStatus } from "../types/Application";
import "./StatusFilter.css";

interface StatusFilterProps {
  value: ApplicationStatus | "All";
  onChange: (status: ApplicationStatus | "All") => void;
}

function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className="status-filter">
      <div className="filter-content">
        <label htmlFor="status-filter">Filter by status:</label>
        <select
          id="status-filter"
          value={value}
          onChange={(e) => onChange(e.target.value as ApplicationStatus | "All")}
          className="filter-select"
        >
          <option value="All">🔍 All Applications</option>
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

export default StatusFilter;