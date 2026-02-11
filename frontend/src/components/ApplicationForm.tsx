import React, { useState } from "react";
import type { Application } from "../types/Application";
import "./ApplicationForm.css";

interface ApplicationFormProps {
  onAdd: (app: Omit<Application, "id">) => void;
}

function ApplicationForm({ onAdd }: ApplicationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    appliedDate: new Date().toISOString().split('T')[0],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.appliedDate) {
      newErrors.appliedDate = "Application date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onAdd({
      ...formData,
      status: "Applied",
    });

    setFormData({
      company: "",
      role: "",
      appliedDate: new Date().toISOString().split('T')[0],
    });
    setErrors({});
    setIsOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      company: "",
      role: "",
      appliedDate: new Date().toISOString().split('T')[0],
    });
    setErrors({});
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="add-application-btn"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Add New Application</span>
      </button>
    );
  }

  return (
    <div className="application-form">
      {/* Form Header */}
      <div className="form-header">
        <h3>➕ New Application</h3>
        <button onClick={handleCancel} className="close-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Company */}
        <div className="form-group">
          <label htmlFor="company">Company Name *</label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={errors.company ? 'error' : ''}
            placeholder="e.g., Google, Microsoft, Startup Inc."
          />
          {errors.company && (
            <p className="error-message">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.company}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="form-group">
          <label htmlFor="role">Role *</label>
          <input
            id="role"
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className={errors.role ? 'error' : ''}
            placeholder="e.g., Frontend Developer, Software Engineer"
          />
          {errors.role && (
            <p className="error-message">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.role}
            </p>
          )}
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="appliedDate">Application Date *</label>
          <input
            id="appliedDate"
            type="date"
            value={formData.appliedDate}
            onChange={(e) => setFormData({ ...formData, appliedDate: e.target.value })}
            className={errors.appliedDate ? 'error' : ''}
          />
          {errors.appliedDate && (
            <p className="error-message">{errors.appliedDate}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            Add Application
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;