import React, { useEffect, useState } from "react";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/customers")
            .then((res) => res.json())
            .then((customerArray) => {
                setCustomers(customerArray);
            });
    }, []);

    return (
        <>
            <h2>Customer List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={`customer--${customer.id}`}>{customer.name}</li>
                ))}
            </ul>
        </>
    );
};
