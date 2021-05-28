import moment from 'moment';
import { EmployeesType, NormalizedEmployeesType } from '../types/types';

export function sortEmployees(employees: EmployeesType[]) {
  return employees
    .map(employee => {
      employee.isActive = false;
      return employee;
    })
    .sort((a, b) => a.lastName.localeCompare(b.lastName));
}

export function normalizeEmployees(employees: EmployeesType[]) {
  const normalizedEmployees = employees.reduce(
    (acc: NormalizedEmployeesType, employee) => {
      const letter = employee.lastName[0].toLowerCase();
      if (!acc[letter]) {
        acc[letter] = [employee];
      } else {
        acc[letter].push(employee);
      }
      return acc;
    },
    {}
  );

  return normalizedEmployees;
}

export function getMonthsFromCurrent() {
  const result = [];
  const currentMonth = moment().month();

  const m = moment();
  for (var i = currentMonth; i < currentMonth + 12; i++) {
    result.push(m.month(i).format('MMMM'));
  }

  return result;
}

export function normalizeActiveEmployeesByMonth(employees: EmployeesType[]) {
  const normalizedEmployees = employees.reduce(
    (acc: NormalizedEmployeesType, employee) => {
      if (employee.isActive) {
        const monthOfBirth = moment(employee.dob).format('MMMM');

        if (!acc[monthOfBirth]) {
          acc[monthOfBirth] = [employee];
        } else {
          acc[monthOfBirth].push(employee);
        }
      }
      return acc;
    },
    {}
  );

  return normalizedEmployees;
}
