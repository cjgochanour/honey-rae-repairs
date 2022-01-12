import React from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./employees/EmployeeList.js";
import { TicketList } from "./serviceTickets/TicketList.js";
import { CustomerList } from "./customers/CustomerList.js";
import { TicketForm } from "./serviceTickets/TicketForm.js";
import { HireEmployee } from "./employees/HireEmployee.js";
import { Ticket } from "./serviceTickets/Ticket.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employee/create">
                <HireEmployee />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
        </>
    );
};
