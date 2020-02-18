import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const FilterForm = (props) => {

    const [filterQuery, setFilterQuery] = useState({
        parameter: 'firstName',
        value: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target

        if (name === 'parameter') {
            const selectValue = event.target[event.target.selectedIndex].getAttribute('data-param');
            setFilterQuery({ ...filterQuery, [name]: selectValue })
        } else {
            setFilterQuery({ ...filterQuery, [name]: value })
        }
    }

    return (
        <Form onSubmit={event => event.preventDefault()}className="my-3">
            <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" onChange={handleInputChange} name='parameter'>
                        <option data-param='firstName'>First Name</option>
                        <option data-param='lastName'>Last Name</option>
                        <option data-param='email'>Email</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={handleInputChange} name='value' value={filterQuery.value} type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Button onClick={() => {
                        props.filterEmployees(filterQuery.parameter, filterQuery.value)
                    }}>Filter</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FilterForm;