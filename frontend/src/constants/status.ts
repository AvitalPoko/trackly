import type { ApplicationStatus } from "../types/Application";

export const STATUS_COLORS: Record<ApplicationStatus, string> = {
  Applied: "#6b7280",
  Interviewing: "#f59e0b",
  Offered: "#10b981",
  Rejected: "#ef4444",
  Accepted: "#8b5cf6",
};

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  Applied: "📝 Applied",
  Interviewing: "💼 Interviewing",
  Offered: "🎉 Offered",
  Rejected: "❌ Rejected",
  Accepted: "✅ Accepted",
};

export const ALL_STATUSES: ApplicationStatus[] = [
  "Applied",
  "Interviewing",
  "Offered",
  "Rejected",
  "Accepted",
];
