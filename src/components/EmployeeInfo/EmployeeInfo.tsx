import { useDispatch } from 'react-redux';

import { EmployeesType } from '../../types/types';
import { updateEmployee } from '../../store/actions/employeesActions';

import styles from './EmployeeInfo.module.css';

type EmployeeInfoPropsType = {
  employee: EmployeesType;
};

export function EmployeeInfo({ employee }: EmployeeInfoPropsType) {
  const dispatch = useDispatch();

  function handleActiveChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const booleanValue = value === 'true' ? true : false;
    dispatch(updateEmployee(employee.id, booleanValue));
  }

  return (
    <li className={styles.employeeInfo}>
      <p className={styles.employeeInfo__name}>
        {employee.lastName} {employee.firstName}
      </p>
      <form>
        <input
          type="radio"
          id={`${employee.id}False`}
          name={employee.id}
          value="false"
          defaultChecked={employee.isActive ? false : true}
          onChange={handleActiveChange}
        />
        <label htmlFor={`${employee.id}False`}>Not active</label>
        <br />
        <input
          type="radio"
          id={`${employee.id}True`}
          name={employee.id}
          value="true"
          defaultChecked={employee.isActive ? true : false}
          onChange={handleActiveChange}
        />
        <label htmlFor={`${employee.id}True`}>Active</label>
      </form>
    </li>
  );
}
