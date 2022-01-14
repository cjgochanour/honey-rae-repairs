import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postTicket } from "../ApiManager.js";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({ description: "", emergency: false });
    const history = useHistory();

    const saveTicket = (event) => {
        event.preventDefault();
        const tick = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: localStorage.getItem("honey_customer"),
            employeeId: 1,
            dateCompleted: "",
        };
        return postTicket(tick).then(() => history.push("/tickets"));
    };

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={(event) => {
                            const tick = { ...ticket };
                            tick.description = event.target.value;
                            updateTicket(tick);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        type="checkbox"
                        onChange={(event) => {
                            const tick = { ...ticket };
                            tick.emergency = event.target.checked;
                            updateTicket(tick);
                        }}
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    );
};
