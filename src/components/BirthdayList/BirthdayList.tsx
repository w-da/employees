import {
  getMonthsFromCurrent,
  normalizeActiveEmployeesByMonth,
} from '../../helpers/employeesHelpers';
import { isEmptyObject } from '../../helpers/helpers';
import { EmployeesType } from '../../types/types';
import { EmployeesBirhtdayGroup } from '../EmployeesBirhtdayGroup/EmployeesBirhtdayGroup';

import styles from './BirthdayList.module.css';

type BirthdayListPropsType = {
  employees: EmployeesType[];
};

export function BirthdayList({ employees }: BirthdayListPropsType) {
  const months = getMonthsFromCurrent();
  const normalizedEmployees = normalizeActiveEmployeesByMonth(employees);

  return (
    <section className={styles.birthdayList}>
      <h2 className={styles.birthdayList__title}>Employees Birthday</h2>
      {isEmptyObject(normalizedEmployees) && <h3>Employees List is empty</h3>}
      {!isEmptyObject(normalizedEmployees) && (
        <ul className={styles.birthdayList__list}>
          {months.map(month => (
            <EmployeesBirhtdayGroup
              key={month}
              month={month}
              employeesList={normalizedEmployees?.[month]}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
