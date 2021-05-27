import { NormalizedEmployeesType } from '../../types/types';
import { ALPHABET } from '../../helpers/constants';
import { EmployeesLetterGroup } from '../EmployeesLetterGroup/EmployeesLetterGroup';

import styles from './EmployeesList.module.css';

type EmployeesListPropTypes = {
  employees: NormalizedEmployeesType;
};

export function EmployeesList({ employees }: EmployeesListPropTypes) {
  return (
    <section className={styles.employeesList}>
      <h2 className={styles.employeesList__title}>Employees</h2>
      <ul className={styles.employeesList__list}>
        {ALPHABET.map(letter => {
          return (
            <EmployeesLetterGroup
              key={letter}
              letter={letter}
              employeesList={employees[letter]}
            />
          );
        })}
      </ul>
    </section>
  );
}
