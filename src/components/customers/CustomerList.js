import React, { useEffect, useState } from "react";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [totalCustomers, updateMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:8088/customers")
            .then((res) => res.json())
            .then((customerArray) => {
                setCustomers(customerArray);
            });
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
            <ul>
                {customers.slice(0, 5).map((customer) => (
                    <li key={`customer--${customer.id}`}>{customer.name}</li>
                ))}
            </ul>
        </>
    );
};
