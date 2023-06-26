export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let employees = [];

  for (const department of departments) {
    employees.push(...report.allEmployees[department]);
  }

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return {
          value: employees[currentIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
