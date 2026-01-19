import type { Application } from "../types/Application";

export const mockApplications: Application[] = [
  {
    id: '2',
    company: 'Google',
    position: 'Frontend Engineer',
    status: 'Applied',
    appliedDate: '2026-01-12',
  },
  {
    id: '2',
    company: 'Amazon',
    position: 'Fullstack Developer',
    status: 'Offered',
    appliedDate: '2026-01-08',
  }
];

function ApplicationsPage() {
  return (
    <div>
      <h2>My Applications</h2>

      {mockApplications.map((app) => (
        <div key={app.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 10 }}>
          <h3>{app.company}</h3>
          <p>{app.role}</p>
          <strong>{app.status}</strong> | <span>{app.appliedDate}</span>
        </div>
      ))}
    </div>
  );
}

export default ApplicationsPage;