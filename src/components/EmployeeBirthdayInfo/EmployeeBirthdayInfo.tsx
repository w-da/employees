import moment from 'moment';
import { EmployeesType } from '../../types/types';

import styles from './EmployeeBirthdayInfo.module.css';

type EmployeeBirthdayInfoPropsType = {
  employee: EmployeesType;
};

export function EmployeeBirthdayInfo({
  employee,
}: EmployeeBirthdayInfoPropsType) {
  return (
    <li className={styles.EmployeeBirthdayInfo}>
      <p className={styles.EmployeeBirthdayInfo__text}>
        {employee.lastName} {employee.firstName} -{' '}
        {moment(employee.dob).format('D MMMM, YYYY')} year
      </p>
    </li>
  );
}
