import React, { useEffect, useState } from "react";

const database = {
    customers: [],
};

export const Repairs = () => {
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
            <h1>Honey Rae's Repair Shop</h1>
            {customers.map((customer) => (
                <h2>{customer.name}</h2>
            ))}
        </>
    );
};
