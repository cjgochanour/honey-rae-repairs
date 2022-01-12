import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Ticket = () => {
    const [ticket, set] = useState({});
    const [employees, setEmployees] = useState([]);
    const { ticketId } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
            .then((res) => res.json())
            .then((data) => set(data));
    }, [ticketId]);

    useEffect(() => {
        fetch("http://localhost:8088/employees")
            .then((res) => res.json())
            .then((data) => setEmployees(data));
    }, []);

    const assignEmployee = (event) => {
        const newServiceTicketObject = {
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: parseInt(event.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted,
        };
        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newServiceTicketObject),
        }).then(() => {
            history.push("/tickets");
        });
    };

    return (
        <>
            <h2>Ticket {ticketId}</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ticket.employee?.name}</div>
                <select id="employee" onChange={assignEmployee}>
                    {employees.map((employee) => {
                        return (
                            <option key={`employee--${employee.id}`} value={employee.id}>
                                {employee.name}
                            </option>
                        );
                    })}
                </select>
            </section>
        </>
    );
};
