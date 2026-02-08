import { useMemo, useState } from "react";
import type { Application, ApplicationStatus } from "../types/Application";

const initialApplications: Application[] = [
  {
    id: "1",
    company: "Google",
    role: "Frontend Engineer",
    status: "Applied",
    appliedDate: "2026-01-12",
  },
  {
    id: "2",
    company: "Amazon",
    role: "Fullstack Developer",
    status: "Offered",
    appliedDate: "2026-01-08",
  },
];

export function useApplications() {
  const [apps, setApps] = useState<Application[]>(initialApplications);

  function addApplication(app: Omit<Application, "id">) {
    const newApp: Application = {
      ...app,
      id: crypto.randomUUID(),
    };
    setApps((prev) => [newApp, ...prev]);
  }

  function deleteApplication(id: string) {
    setApps((prev) => prev.filter((a) => a.id !== id));
  }

  function updateStatus(id: string, status: ApplicationStatus) {
    setApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }

  return {
    apps,
    addApplication,
    deleteApplication,
    updateStatus,
  };
}

