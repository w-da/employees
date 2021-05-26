import { EmployeesType } from '../../types/types';

export const setEmployees = (employees: EmployeesType[]) => ({
  type: 'SET_EMPLOYEES',
  payload: {
    employees,
  },
});

export const updateEmployee = (id: string) => ({
  type: 'UPDATE_EMPLOYEE',
  payload: {
    id,
  },
});

export const setError = (error: string) => ({
  type: 'ERROR',
  payload: {
    error,
  },
});

export const setLoading = () => ({
  type: 'LOADING',
});
