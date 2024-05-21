import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from '../services/employeeService';

const EmployeeDetails = () => {
  const { id } = useParams(); // Assuming you are using react-router to get the ID from the URL
  const [employee, setEmployee] = useState(null);
  const [directReports, setDirectReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetchEmployeeById(id);
        setEmployee(response.data.employee);
        setDirectReports(response.data.direct_reports);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {employee ? (
        <div>
          <h1>Employee Details</h1>
          <p>ID: {employee.id}</p>
          <p>First Name: {employee.first_name}</p>
          <p>Last Name: {employee.last_name}</p>
          <p>Position: {employee.position}</p>
          <p>Hire Date: {employee.hire_date}</p>
          <p>Manager ID: {employee.manager_id}</p>
          <p>Active: {employee.active ? 'Yes' : 'No'}</p>
          
          <h2>Direct Reports</h2>
          {directReports.length > 0 ? (
            <ul>
              {directReports.map(report => (
                <li key={report.id}>
                  {report.first_name} {report.last_name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No direct reports</p>
          )}
        </div>
      ) : (
        <div>Employee not found</div>
      )}
    </div>
  );
};

export default EmployeeDetails;
