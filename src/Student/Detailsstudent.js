import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "./appprovider";

export function DetailsStudent() {
    const {student}=AppState();
    const history = useHistory();
    const { id } = useParams();
    const students = student[id];
    return (
        <BaseApp
            title={"Student Details"}
        >
            <div className="detail-continar">
                <div className="detail-card">
                    <h1>{students.name}</h1>
                    <p>std: {students.std}</p>
                    <p>Session: {students.session}</p>
                    <p>School: {students.school}</p>
                    <p>Mark: {students.mark}/500 </p>
                    <button
                    className="btn btn-detail"
                    onClick={()=>history.push("/student")}
                    >Student</button>
                </div>
            </div>
        </BaseApp>
    )
}