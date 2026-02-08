import { useState } from "react";
import type { Application, ApplicationStatus } from "../types/Application";

interface Props {
    onAdd: (app: Omit<Application , "id">) => void;}


function ApplicationForm({onAdd} :Props) {
      const [company, setCompany] = useState(" ");
      const [position, setPosition] = useState(" ");
       const[status, setStatus] = useState<ApplicationStatus>("Applied");
       const[appliedDate, setAppliedDate] = useState("");


  return (
    <div style = {{marignBottom: 16}}>
    <h3>Add Appliction</h3>
    <input value={company} onChange={(role) => setCompany (role.target.value)} placeholder="Company Name" />
    <input value={position} onChange={(position) => setPosition (position.target.value)} placeholder="Position" />
    <select value={status} onChange={(e) => setStatus(e.target.value as ApplicationStatus)}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
        <option value="Accepted">Accepted</option>
    </select>
    <input type="date" value={appliedDate} onChange={(e) => setAppliedDate(e.target.value)} />
    <button onClick={() => {
        if(!company.trim() || !position.trim() || !appliedDate) {
            alert("Please fill in all fields");
            return;
        }
        onAdd({company, position, status, appliedDate});
        setCompany(" ");
        setPosition(" ");
        setStatus("Applied");
        setAppliedDate("");
    }}>Add</button>
    </div>
  );
}

export default ApplicationForm;