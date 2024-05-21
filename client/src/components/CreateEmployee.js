// CreateEmployee.js
import React, { useState } from 'react';
import { createEmployee } from '../services/employeeService';
import './CreateEmployee.css'; // Import the CSS file

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [managerId, setManagerId] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [active, setActive] = useState(true); // Assuming default value as true
  const [directReports, setDirectReports] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeData = {
      first_name: firstName,
      last_name: lastName,
      position,
      manager_id: managerId,
      hire_date: hireDate,
      active,
      direct_reports: directReports.split(',').map(Number),
    };

    try {
      const response = await createEmployee(employeeData);
      setMessage(`Employee ${response.data.first_name} ${response.data.last_name} created successfully!`);
      setError(null);
    } catch (error) {
      setMessage(null);
      setError('Failed to create employee');
    }
  };

  return (
    <div className="create-employee-container">
      <h1 className="title">Create New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Position:</label>
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Manager ID:</label>
          <input
            type="text"
            placeholder="Manager ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Hire Date:</label>
          <input
            type="date"
            placeholder="Hire Date"
            value={hireDate}
            onChange={(e) => setHireDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Active:</label>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label className="label">Direct Reports (comma-separated IDs):</label>
          <input
            type="text"
            placeholder="Direct Reports"
            value={directReports}
            onChange={(e) => setDirectReports(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Employee</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CreateEmployee;