import api from './api';

export const fetchEmployees = () => {
  return api.get('/employees');
};

export const fetchActiveEmployees = () => {
  return api.get('/employees/active');
};

  export const fetchEmployeeById = (id) => {
    return api.get(`/employees/${id}`);
  };

export const createEmployee = (employeeData) => {
  return api.post('/employees', employeeData);
};

export const deactivateEmployee = (id) => {
  return api.put(`/employees/${id}/deactivate`);
};

export const fetchEmployeesHiredInRange = (startDate, endDate) => {
  return api.get(`/employees/hired_in_date_range`, {
    params: { start_date: startDate, end_date: endDate },
  });
};
