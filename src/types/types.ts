// Employees

export type EmployeesType = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
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
