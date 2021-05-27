import { StoreType } from '../../types/types';

export const getEmployeesFromStore = (state: StoreType) =>
  state.employees.employees;
export const getIsLoading = (state: StoreType) => state.employees.isLoading;
export const getError = (state: StoreType) => state.employees.error;
