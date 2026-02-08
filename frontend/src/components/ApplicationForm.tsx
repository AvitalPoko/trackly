import { useState } from "react";


interface Props {
    onAdd: (company: string, position: string) => void;}


function ApplicationForm({onAdd} :Props) {
      const [company, setCompany] = useState(" ");
      const [position, setPosition] = useState(" ");



  return (
    <div style = {{marignBottom: 16}}>
    <h3>Add Appliction</h3>
    <input value={company} onChange={(role) => setCompany (role.target.value)} placeholder="Company Name" />
    <input value={position} onChange={(position) => setPosition (position.target.value)} placeholder="Position" />
    <button onClick={() => {
        onAdd(company, position);
        setCompany(" ");
        setPosition(" ");
    }}>Add</button>
    <p>(Form will be here)</p>
    </div>
  );
}

export default ApplicationForm;