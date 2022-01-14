import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../ApiManager.js";

export const Employee = () => {
    const [employee, set] = useState({});
    const { employeeId } = useParams();

    useEffect(() => {
        getEmployeeById(employeeId).then((data) => set(data));
    }, [employeeId]);

    return (
        <>
            <section className="employee">
                <h1>Employee #{employeeId}</h1>
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    );
};
