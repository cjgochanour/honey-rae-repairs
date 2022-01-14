import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllEmployees } from "../ApiManager.js";

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([]);
    const [specialties, setSpecialty] = useState("");
    const history = useHistory();

    useEffect(() => {
        getAllEmployees().then((data) => {
            changeEmployee(data);
        });
    }, []);

    useEffect(() => {
        const x = employees.map((employee) => employee.specialty);
        setSpecialty(x.join(", "));
    }, [employees]);

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            <div>Specialties: {specialties}</div>
            {employees.map((employee) => {
                return (
                    <p key={`employee--${employee.id}`}>
                        <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
                    </p>
                );
            })}
        </>
    );
};
