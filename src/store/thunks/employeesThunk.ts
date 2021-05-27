import axios, { AxiosResponse } from 'axios';
import { sortEmployees } from '../../helpers/employeesHelpers';
import {
  setEmployees,
  setError,
  setLoading,
} from '../actions/employeesActions';

const BASE_URL =
  'https://yalantis-react-school-api.yalantis.com/api/task0/users';

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
