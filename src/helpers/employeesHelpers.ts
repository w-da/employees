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
