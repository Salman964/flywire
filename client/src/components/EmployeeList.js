import React, { useEffect, useState } from 'react';
import { fetchActiveEmployees } from '../services/employeeService';
import './EmployeeList.css'
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchActiveEmployees().then(response => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <div className="employee-list-container">
      <h1>Active Employees</h1>
      <div className="employee-list-header">
        <div className="header-row">
          <div className="header-cell">
            <span>ID</span>
          </div>
          <div className="header-cell">
            <span>First Name</span>
          </div>
          <div className="header-cell">
            <span>Last Name</span>
          </div>
          <div className="header-cell">
            <span>Position</span>
          </div>
          <div className="header-cell">
            <span>Hire Date</span>
          </div>
          <div className="header-cell">
            <span>Manager ID</span>
          </div>
          <div className="header-cell">
            <span>Active</span>
          </div>
        </div>
      </div>
      <div className="employee-list-body">
        <table className="employee-table">
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id} className="employee-row">
                <td className="employee-cell">
                  <span>{employee.id}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.first_name}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.last_name}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.position}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.hire_date}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.manager_id}</span>
                </td>
                <td className="employee-cell">
                  <span>{employee.active ? 'Yes' : 'No'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;