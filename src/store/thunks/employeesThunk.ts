import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../../helpers/constants';
import { sortEmployees } from '../../helpers/employeesHelpers';
import {
  setEmployees,
  setError,
  setLoading,
} from '../actions/employeesActions';

export const getEmployees = () => (dispatch: any) => {
  dispatch(setLoading());

  axios
    .get(BASE_URL)
    .then(({ data }: AxiosResponse) => {
      const sortedEmployees = sortEmployees(data);
      dispatch(setEmployees(sortedEmployees));
    })
    .catch(error => dispatch(setError(error.message)));
};
