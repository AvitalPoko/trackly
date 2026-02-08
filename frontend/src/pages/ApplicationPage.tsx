import React from "react";
import ApplicationCard from "../components/ApplicationCard";
import { useApplications } from "../hooks/useApplications";
import ApplicationForm from "../components/ApplicationForm";



function ApplicationPage() {

  const { apps, deleteApplication, updateStatus, addApplication } = useApplications();


  return (
    <div>
         <ApplicationForm  onAdd={addApplication}/>
      <h2>My Applications</h2>

      {apps.map((app) => (
        <ApplicationCard
          key={app.id}
          application={app}
          onDelete={deleteApplication}
          onStatusChange={updateStatus}
        />
      ))}
    </div>
  );
}

export default ApplicationPage;


