import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import listUtils from './utils/listUtils'
import FilterForm from './components/FilterForm';

function App() {

  const [employees, setEmployees] = useState([]);
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    // The function that is called on render:
    getEmployees()

  }, [])

  const getEmployees = async () => {
    try {
      const data = await Axios.get('https://randomuser.me/api/?results=100&nat=us')
      let rawList = data.data.results;
      const processedList = listUtils.processRawEmployeeList(rawList)
      setEmployees(processedList)
    } catch (err) {
      console.log("error fetching employees: ", err)
    }
  }

  const handleSort = (parameter) => {
    (order === 'asc') ? setOrder('desc') : setOrder('asc')
    const newSortedList = listUtils.sortList(employees, parameter, order)
    setEmployees(newSortedList)
  }

  const filterEmployees = (param, value) => {
    const newFilteredList = listUtils.filterByParam(employees, param, value)
    console.log('filtered', newFilteredList)
    setEmployees(newFilteredList)
  }

  return (
    <div>
      <Header />
      <Container>
        <FilterForm filterEmployees={filterEmployees} getEmployees={getEmployees} />
        <EmployeeTable
          employees={employees}
          handleSort={handleSort} />
      </Container>
    </div>
  );
}

export default App;
