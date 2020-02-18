import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const EmployeeTable = (props) => {

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th onClick={() => props.handleSort('firstName')}>First Name</th>
                    <th onClick={() => props.handleSort('lastName')}>Last Name</th>
                    <th onClick={() => props.handleSort('email')}>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {props.employees && props.employees.map((employee, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Image src={employee.image} rounded /></td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.address}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default EmployeeTable;
