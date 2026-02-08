import React from "react";
import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { useApplications } from "../hooks/useApplications";
import ApplicationForm from "../components/ApplicationForm";
import Dashboard from "../components/Dashboard";
import StatusFilter from "../components/StatusFilter";


function ApplicationPage() {

  const { apps, deleteApplication, updateStatus, addApplication } = useApplications();


  const [filterStatus, setFilterStatus] = useState("All"); //All categories by default

  const filteredApps = filterStatus === "All" ? apps : apps.filter((app) => app.status === filterStatus);

  return (
    <div>
          <Dashboard apps={apps} />
         <ApplicationForm  onAdd={addApplication}/>
      <h2>My Applications</h2>
      <StatusFilter value={filterStatus} onChange={setFilterStatus} />
      {filteredApps.map((app) => (
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


