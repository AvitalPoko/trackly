import type {Application} from "../types/Application";

interface Props {
    application: Application;
}


function ApplicationCard({application}: Props) {
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
        <strong>{application.status}</strong> | {" "}
        <span>{application.appliedDate}</span>
        </div>
    );
}

export default ApplicationCard;


