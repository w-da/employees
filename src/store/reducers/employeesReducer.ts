import { Action } from '../../types/types';
import { EmployeesType } from '../../types/types';

type InitialState = {
  employees: EmployeesType[];
  error: null | string;
  isLoading: boolean;
};

const initialState: InitialState = {
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
