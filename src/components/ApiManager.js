const postOptions = (x) => {
    return {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(x),
    };
};
const putOptions = (x) => {
    return {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(x),
    };
};
export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers").then((res) => res.json());
};
export const getCustomerEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`).then((res) => res.json());
};
export const postCustomer = (data) => {
    return fetch("http://localhost:8088/customers", postOptions(data));
};
export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then((res) => res.json());
};
export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`).then((res) => res.json());
};
export const postEmployee = (data) => {
    return fetch("http://localhost:8088/employees", postOptions(data));
};
export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer").then((res) => res.json());
};
export const postTicket = (obj) => {
    return fetch("http://localhost:8088/serviceTickets", postOptions(obj));
};
export const getTicketById = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}?_expand=customer&_expand=employee`).then((res) =>
        res.json()
    );
};
export const putTicket = (id, obj) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, putOptions(obj));
};
export const deleteTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, { method: "DELETE" });
};
