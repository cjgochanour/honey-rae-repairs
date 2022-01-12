import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([]);
    const [specialties, setSpecialty] = useState("");
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8088/employees")
            .then((res) => res.json())
            .then((data) => {
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
