export type ApplicationStatus =
  | "Applied"
  | "Interviewing"
  | "Offered"
  | "Rejected"
  | "Accepted";

export interface Application {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  appliedDate: string; // YYYY-MM-DD
  source?: string;
  notes?: string;
  link?: string;
}
