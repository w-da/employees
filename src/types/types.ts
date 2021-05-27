// Employees

export type EmployeesType = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  isActive: boolean;
};

// Normalized Employees Type

export type NormalizedEmployeesType = {
  [key: string]: EmployeesType[];
};

// InitialState

export type InitialEmployeesState = {
  employees: EmployeesType[];
  error: null | string;
  isLoading: boolean;
};

// Store

export type StoreType = {
  employees: InitialEmployeesState;
};

// Action

type SetEmployeesAction = {
  type: 'SET_EMPLOYEES';
  payload: {
    employees: EmployeesType[];
  };
};

type UpdateEmployeeAction = {
  type: 'UPDATE_EMPLOYEE';
  payload: {
    id: string;
    value: boolean;
  };
};

type ErrorAction = {
  type: 'ERROR';
  payload: {
    error: string;
  };
};

type LoadingAction = {
  type: 'LOADING';
};

export type Action =
  | SetEmployeesAction
  | ErrorAction
  | LoadingAction
  | UpdateEmployeeAction;
