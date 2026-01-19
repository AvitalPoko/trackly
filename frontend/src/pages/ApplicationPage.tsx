import type { Application } from "../types/Application";
import ApplicationCard from "../components/ApplicationCard";

export const mockApplications: Application[] = [
  {
    id: '1',
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

function ApplicationPage() {
  return (
    <div>
      <h2>My Applications</h2>

      {mockApplications.map((app) => (
        <ApplicationCard key={app.id} application={app} />
        ))}
    </div>
  );
}

export default ApplicationPage;