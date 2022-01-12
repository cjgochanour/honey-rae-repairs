import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([]);
    const history = useHistory();

    const fetchTickets = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then((res) => res.json())
            .then((data) => {
                updateTickets(data);
            });
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, { method: "DELETE" }).then(fetchTickets());
    };

    return (
        <>
            <h2>Service Tickets</h2>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            {tickets.map((ticket) => {
                return (
                    <p key={`ticket--${ticket.id}`} className={ticket.emergency ? "ticket emergency" : "ticket"}>
                        {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>{" "}
                        submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                        <button
                            onClick={() => {
                                deleteTicket(ticket.id);
                            }}
                        >
                            Delete
                        </button>
                    </p>
                );
            })}
        </>
    );
};
