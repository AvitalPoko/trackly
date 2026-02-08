import React from "react";
import type { Application } from "../types/Application";

interface Props {
    application: Application;
    onStatusChange: (id: string, status: string) => void;
    onDelete: (id: string) => void;
}


function ApplicationCard({application, onStatusChange, onDelete}: Props) {
    return (
        <div
        style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,}}
        >

        <h3>{application.company}</h3>
        <p>{application.role}</p>
        <div>
        <strong>Status :</strong>{" "}
        <select
        value={application.status}
        onChange={(e) => onStatusChange(application.id, e.target.value)}
        >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
        <option value="Accepted">Accepted</option>
        </select>
       </div>

       <p>Date : {application.appliedDate}</p>

      <button onClick={() => onDelete(application.id)}>Delete</button>
     </div>
    );
}

export default ApplicationCard;


