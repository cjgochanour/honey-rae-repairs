import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postEmployee } from "../ApiManager.js";

export const HireEmployee = () => {
    const [employee, setEmp] = useState({ name: "", specialty: "" });
    const history = useHistory();

    const saveEmployee = (event) => {
        event.preventDefault();
        const hire = { name: employee.name, specialty: employee.specialty };
        postEmployee(hire).then(() => history.push("/employees"));
    };

    return (
        <form className="hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        onChange={(event) => {
                            const hire = { ...employee };
                            hire.name = event.target.value;
                            setEmp(hire);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Technical specialty"
                        onChange={(event) => {
                            const hire = { ...employee };
                            hire.specialty = event.target.value;
                            setEmp(hire);
                        }}
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    );
};
