import React from "react";
import type { ApplicationStatus } from "../types/Application";

type StatusFilterProps = {
  value: ApplicationStatus | "All";
  onChange: (status: ApplicationStatus | "All") => void;
};

function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className="status-filter">
      <label htmlFor="status-select">Filter by status: </label>
      <select
        id="status-select"
        value={value}
        onChange={(e) => onChange(e.target.value as ApplicationStatus | "All")}
      >
        <option value="All">All Applications</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
        <option value="Accepted">Accepted</option>
      </select>
    </div>
  );
}

export default StatusFilter;