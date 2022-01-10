import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/employees")
            .then((res) => res.json())
            .then((employeeArray) => {
                setEmployees(employeeArray);
            });
    }, []);

    return (
        <>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={`employee--${employee.id}`}>{employee.name}</li>
                ))}
            </ul>
        </>
    );
};
