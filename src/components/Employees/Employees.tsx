import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EmployeesList } from '../EmployeesList/EmployeesList';
import { normalizeEmployees } from '../../helpers/employeesHelpers';

import {
  getEmployeesFromStore,
  getError,
  getIsLoading,
} from '../../store/selectors/employeesSelectors';
import { getEmployees } from '../../store/thunks/employeesThunk';
import { BirthdayList } from '../BirthdayList/BirthdayList';

import styles from './Employees.module.css';

export function Employees() {
  const employees = useSelector(getEmployeesFromStore);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  if (error) return <h2>{error}</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  const normalizedEmployees = normalizeEmployees(employees);

  return (
    <main className={styles.container}>
      <EmployeesList employees={normalizedEmployees} />
      <BirthdayList employees={employees} />
    </main>
  );
}
