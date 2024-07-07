function highestPaid(employees) {
    let highestSalary = 0;
    let highestPaidEmployee = null;
  
    for (const employee of employees) {
      const { salary } = employee;
      if (salary > highestSalary) {
        highestSalary = salary;
        highestPaidEmployee = employee;
      }
    }
  
    return highestPaidEmployee;
  }

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(highestPaid(employees));

function destructuringToSwap(employees) {
    [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
  
    return employees;
}
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(destructuringToSwap(employees));
  
  