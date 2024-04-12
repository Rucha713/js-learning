class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("============================================================================================================");
console.log(" 1. Find all the employees from 'Wipro' company");

const wiproEmployees = arrayEmps.filter(employee => employee.emp_company === 'Wipro')
.forEach(element => {
    console.log(element);
});

console.log("============================================================================================================");
console.log("2. Find all the employees from 'IT' OR 'HR' dept");

const itHrEmployees = arrayEmps.filter(employee => employee.emp_dept === 'IT' || employee.emp_dept === 'HR').forEach(Person => {
    console.log("IT and HR Employees:", Person);
});

console.log("============================================================================================================");
console.log(" 3. Find all the employees whose emp id's are greater than 50");

const idGreaterThan50 = arrayEmps.filter(employee => employee.emp_id > 50).forEach((element)=>{
    console.log("Employees with ID greater than 50:", element);

});

console.log("============================================================================================================");
console.log("  4. Find all the employees whose names start with letter 'A' or 'V' or 'M'");

const startsWithAVM = arrayEmps.filter(employee => employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")).forEach((person2)=>{
    console.log(person2);
});

console.log("============================================================================================================");
console.log("  5. Find the average salary of the employee for all the department");

const totalSalary = arrayEmps.reduce((acc, employee) => acc + employee.emp_salary, 0);
const averageSalary = totalSalary / arrayEmps.length;
console.log("Average Salary of all Employees:", averageSalary);

console.log("============================================================================================================");
console.log(" 6. Find the average salary for 'IT' department");
const itEmployees = arrayEmps.filter(employee => employee.emp_dept === 'IT');
const totalSalaryIT = itEmployees.reduce((acc, employee) => acc + employee.emp_salary, 0);
const averageSalaryIT = totalSalaryIT / itEmployees.length;
console.log("Average Salary of IT Employees:", averageSalaryIT);
