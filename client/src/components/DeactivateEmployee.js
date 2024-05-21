// DeactivateEmployee.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deactivateEmployee } from '../services/employeeService';

const DeactivateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  useEffect(() => {
    deactivateEmployee(id).then(response => {
      setStatus('Employee deactivated successfully');
      setTimeout(() => navigate('/'), 2000); // redirect after 2 seconds
    }).catch(() => {
      setStatus('Failed to deactivate employee');
    });
  }, [id, navigate]);

  return (
    <div>
      <h1>Deactivate Employee</h1>
      <p>{status}</p>
    </div>
  );
};

export default DeactivateEmployee;
