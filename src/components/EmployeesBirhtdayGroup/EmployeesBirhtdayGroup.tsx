import { EmployeesType } from '../../types/types';
import { EmployeeBirthdayInfo } from '../EmployeeBirthdayInfo/EmployeeBirthdayInfo';

import styles from './EmployeesBirhtdayGroup.module.css';

type EmployeesBirhtdayGroupPropsType = {
  month: string;
  employeesList: EmployeesType[];
};

export function EmployeesBirhtdayGroup({
  month,
  employeesList,
}: EmployeesBirhtdayGroupPropsType) {
  if (!employeesList) return null;

  return (
    <li className={styles.employeesBirthdayGroup}>
      <h3 className={styles.employeesBirthdayGroup__month}>{month}</h3>
      {employeesList.length !== 0 && (
        <ul className={styles.employeesBirthdayGroup__list}>
          {employeesList.map(employee => {
            return (
              <EmployeeBirthdayInfo key={employee.id} employee={employee} />
            );
          })}
        </ul>
      )}
    </li>
  );
}
