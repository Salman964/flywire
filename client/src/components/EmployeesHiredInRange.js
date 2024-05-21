

// EmployeesHiredInRange.js
import React, { useState } from 'react';
import { fetchEmployeesHiredInRange } from '../services/employeeService';
import './EmployeesHiredInRange.css';

const EmployeesHiredInRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchEmployeesHiredInRange(startDate, endDate);
      setEmployees(response.data);
      setMessage(`Employees hired in range: ${startDate} to ${endDate}`);
      setError(null);
    } catch (error) {
      setMessage(null);
      setError('Failed to fetch employees');
    }
  };

  return (
    <div className="employees-hired-in-range-container">
      <h1>Employees Hired in Range</h1>
      <form onSubmit={handleSubmit}>
        <div className="date-range-picker">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Fetch Employees</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
      <div className="employees-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee">
            <p>
              {employee.first_name} {employee.last_name}
            </p>
            {/* other details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesHiredInRange;
