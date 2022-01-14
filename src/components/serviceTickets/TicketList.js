import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteTicket, getAllTickets } from "../ApiManager.js";
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([]);
    const history = useHistory();

    const fetchTickets = () => {
        return getAllTickets().then((data) => updateTickets(data));
    };

    useEffect(() => {
        return fetchTickets();
    }, []);

    const removeTicket = (id) => {
        return deleteTicket(id).then(fetchTickets());
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
                                removeTicket(ticket.id);
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
