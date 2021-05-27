import { EmployeesType } from '../../types/types';
import { EmployeeInfo } from '../EmployeeInfo/EmployeeInfo';

import styles from './EmployeesLetterGroup.module.css';

type EmployeesLetterGroupPropsType = {
  letter: string;
  employeesList: EmployeesType[];
};

export function EmployeesLetterGroup({
  letter,
  employeesList = [],
}: EmployeesLetterGroupPropsType) {
  return (
    <li className={styles.employeeGroup}>
      <h3 className={styles.employeeGroup__letter}>{letter.toUpperCase()}</h3>
      {!employeesList.length && <p>----</p>}
      {employeesList.length !== 0 && (
        <ul className={styles.employeeGroup__list}>
          {employeesList.map(employee => {
            return <EmployeeInfo key={employee.id} employee={employee} />;
          })}
        </ul>
      )}
    </li>
  );
}
