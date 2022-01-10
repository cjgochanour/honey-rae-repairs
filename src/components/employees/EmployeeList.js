import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([]);
    const [specialties, setSpecialty] = useState("");

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
            <div>Specialties: {specialties}</div>
            {employees.map((employee) => {
                return <p key={`employee--${employee.id}`}>{employee.name}</p>;
            })}
        </>
    );
};
