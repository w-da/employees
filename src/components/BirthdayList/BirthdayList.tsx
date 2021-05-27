import { EmployeesType } from '../../types/types';

type BirthdayListPropsType = {
  employees: EmployeesType[];
};

export function BirthdayList({ employees }: BirthdayListPropsType) {
  return (
    <section>
      <h2>Employees Birthday</h2>
      <ul>
        {employees.map(employee => {
          if (employee.isActive) return <li>{employee.lastName}</li>;
        })}
      </ul>
    </section>
  );
}
