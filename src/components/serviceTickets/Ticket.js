import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getTicketById, getAllEmployees, putTicket } from "../ApiManager.js";

export const Ticket = () => {
    const [ticket, set] = useState({});
    const [employees, setEmployees] = useState([]);
    const { ticketId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getTicketById(ticketId).then((data) => set(data));
    }, [ticketId]);

    useEffect(() => {
        getAllEmployees().then((data) => setEmployees(data));
    }, []);

    const assignEmployee = (event) => {
        const newServiceTicketObject = {
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: parseInt(event.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted,
        };
        return putTicket(ticketId, newServiceTicketObject).then(() => {
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
