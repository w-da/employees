import { Action } from '../../types/types';
import { InitialEmployeesState } from '../../types/types';

const initialState: InitialEmployeesState = {
  employees: [],
  error: null,
  isLoading: false,
};

export const employeesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return {
        employees: action.payload.employees,
        error: null,
        isLoading: false,
      };

    case 'UPDATE_EMPLOYEE':
      return {
        employees: state.employees.map(employee => {
          if (employee.id === action.payload.id) {
            const updatedEmployee = {
              ...employee,
              isActive: action.payload.value,
            };
            return updatedEmployee;
          }

          return employee;
        }),
        error: null,
        isLoading: false,
      };

    case 'LOADING':
      return {
        employees: [],
        error: null,
        isLoading: true,
      };

    case 'ERROR':
      return {
        employees: [],
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
