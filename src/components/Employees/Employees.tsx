import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../Loader/Loader';
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
import { setEmployees } from '../../store/actions/employeesActions';

export function Employees() {
  const employees = useSelector(getEmployeesFromStore);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    const employeesFromStorage = localStorage.getItem('employees');

    if (!employeesFromStorage || JSON.parse(employeesFromStorage).length === 0)
      dispatch(getEmployees());

    if (employeesFromStorage)
      dispatch(setEmployees(JSON.parse(employeesFromStorage)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  if (error) return <h2>{error}</h2>;
  if (isLoading || employees.length === 0) return <Loader />;

  const normalizedEmployees = normalizeEmployees(employees);

  return (
    <main className={styles.container}>
      <EmployeesList employees={normalizedEmployees} />
      <BirthdayList employees={employees} />
    </main>
  );
}
