import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../ApiManager.js";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [totalCustomers, updateMsg] = useState("");

    useEffect(() => {
        getAllCustomers().then((data) => setCustomers(data));
    }, []);

    useEffect(() => {
        if (customers.length === 1) {
            updateMsg("You have 1 customer");
        } else {
            updateMsg(`You have ${customers.length} customers`);
        }
    }, [customers]);

    return (
        <>
            <h2>Customer List</h2>
            <div>{totalCustomers}</div>
            {customers.slice(0, 5).map((customer) => (
                <p key={`customer--${customer.id}`}>{customer.name}</p>
            ))}
        </>
    );
};
