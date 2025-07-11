// Tasks 5, 6, 7: Advanced Types, Employee Functions, and String Literals
// File: task_2/js/main.ts
// This file demonstrates advanced TypeScript features including interfaces for classes,
// type predicates, union types, and string literal types

// ===== TASK 5: ADVANCED TYPES PART 1 =====

// DirectorInterface: Defines the contract for Director behavior
// This interface specifies what methods a Director class must implement
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface: Defines the contract for Teacher behavior  
// This interface specifies what methods a Teacher class must implement
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class that implements the DirectorInterface
// This class provides specific implementations for director behaviors
class Director implements DirectorInterface {
  
  // Directors have the privilege to work from home
  workFromHome(): string {
    return "Working from home";
  }

  // Directors can take coffee breaks (management perks!)
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  // Directors focus on high-level administrative tasks
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class that implements the TeacherInterface
// This class provides specific implementations for teacher behaviors
class Teacher implements TeacherInterface {
  
  // Teachers typically cannot work from home (need to be in classroom)
  workFromHome(): string {
    return "Cannot work from home";
  }

  // Teachers often don't get break flexibility during school hours
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  // Teachers focus on educational and classroom tasks
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Union type: An employee can be either a Director or a Teacher
// This is TypeScript's way of saying "this variable can be one of these types"
type Employee = Director | Teacher;

// Factory function: Creates appropriate employee based on salary
// This demonstrates conditional logic with TypeScript types
function createEmployee(salary: number | string): Employee {
  // If salary is a number and less than 500, create a Teacher
  // Otherwise, create a Director
  // Note: string salaries (like "$500") always result in Director
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// ===== TASK 6: CREATING FUNCTIONS SPECIFIC TO EMPLOYEES =====

// Type predicate function: Safely determines if an employee is a Director
// The "employee is Director" syntax is called a "type predicate"
// It tells TypeScript that if this function returns true, the parameter is definitely a Director
function isDirector(employee: Employee): employee is Director {
  // We check if the employee is an instance of the Director class
  return employee instanceof Director;
}

// Function that executes work based on employee type
// This demonstrates polymorphism - same function name, different behavior based on type
function executeWork(employee: Employee): string {
  // Use our type predicate to safely determine the employee type
  if (isDirector(employee)) {
    // TypeScript now knows employee is definitely a Director
    return employee.workDirectorTasks();
  } else {
    // TypeScript knows employee must be a Teacher (the only other option)
    return employee.workTeacherTasks();
  }
}

// ===== TASK 7: STRING LITERAL TYPES =====

// String literal type: Only allows specific string values
// This is more restrictive than just "string" - it must be exactly "Math" or "History"
type Subjects = "Math" | "History";

// Function that uses string literal types
// The parameter must be exactly "Math" or "History", nothing else is allowed
function teachClass(todayClass: Subjects): string {
  // Using a switch statement to handle each possible value
  switch (todayClass) {
    case "Math":
      return "Teaching Math";
    case "History":
      return "Teaching History";
    // TypeScript knows these are the only two possibilities, so no default needed
  }
}

// Alternative implementation using if-else (both approaches work)
function teachClassAlternative(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// ===== COMPREHENSIVE TESTING AND EXAMPLES =====

console.log('=== TASK 5: ADVANCED TYPES DEMONSTRATION ===');

// Test the createEmployee function with different salary values
console.log('\n--- createEmployee Function Tests ---');

// Test with low salary (should create Teacher)
const employee1 = createEmployee(200);
console.log('createEmployee(200):', employee1);
console.log('Is Director?', isDirector(employee1));

// Test with high salary (should create Director)  
const employee2 = createEmployee(1000);
console.log('createEmployee(1000):', employee2);
console.log('Is Director?', isDirector(employee2));

// Test with string salary (should create Director)
const employee3 = createEmployee('$500');
console.log('createEmployee("$500"):', employee3);
console.log('Is Director?', isDirector(employee3));

// Test boundary case
const employee4 = createEmployee(500);
console.log('createEmployee(500):', employee4);
console.log('Is Director?', isDirector(employee4));

console.log('\n--- Interface Implementation Tests ---');

// Test Director methods directly
const director = new Director();
console.log('Director workFromHome():', director.workFromHome());
console.log('Director getCoffeeBreak():', director.getCoffeeBreak());
console.log('Director workDirectorTasks():', director.workDirectorTasks());

// Test Teacher methods directly
const teacher = new Teacher();
console.log('Teacher workFromHome():', teacher.workFromHome());
console.log('Teacher getCoffeeBreak():', teacher.getCoffeeBreak());
console.log('Teacher workTeacherTasks():', teacher.workTeacherTasks());

console.log('\n=== TASK 6: EMPLOYEE-SPECIFIC FUNCTIONS ===');

// Test executeWork function with different employee types
console.log('\n--- executeWork Function Tests ---');
console.log('executeWork(createEmployee(200)):', executeWork(createEmployee(200)));
console.log('executeWork(createEmployee(1000)):', executeWork(createEmployee(1000)));

// Test with pre-created employees
console.log('executeWork(teacher):', executeWork(teacher));
console.log('executeWork(director):', executeWork(director));

// Demonstrate type safety with isDirector
console.log('\n--- Type Predicate Demonstrations ---');
const employees: Employee[] = [
  createEmployee(150),
  createEmployee(800),
  createEmployee(300),
  createEmployee(1200),
  createEmployee('$750')
];

employees.forEach((emp, index) => {
  const type = isDirector(emp) ? 'Director' : 'Teacher';
  const work = executeWork(emp);
  console.log(`Employee ${index + 1}: ${type} - ${work}`);
});

console.log('\n=== TASK 7: STRING LITERAL TYPES ===');

// Test teachClass function with valid subjects
console.log('\n--- teachClass Function Tests ---');
console.log('teachClass("Math"):', teachClass("Math"));
console.log('teachClass("History"):', teachClass("History"));

// Test alternative implementation
console.log('teachClassAlternative("Math"):', teachClassAlternative("Math"));
console.log('teachClassAlternative("History"):', teachClassAlternative("History"));

// Demonstrate string literal type safety
console.log('\n--- String Literal Type Safety ---');

// These work because they match the Subjects type exactly
const mathClass: Subjects = "Math";
const historyClass: Subjects = "History";

console.log('Math class result:', teachClass(mathClass));
console.log('History class result:', teachClass(historyClass));

// The following would cause TypeScript errors if uncommented:
// const invalidSubject: Subjects = "Science";  // ❌ Error: not assignable to type Subjects
// teachClass("English");                       // ❌ Error: Argument not assignable to parameter

// Demonstrate practical usage with arrays
const todaysSchedule: Subjects[] = ["Math", "History", "Math"];
console.log('\n--- Today\'s Teaching Schedule ---');
todaysSchedule.forEach((subject, period) => {
  console.log(`Period ${period + 1}: ${teachClass(subject)}`);
});

console.log('\n=== ADVANCED DEMONSTRATIONS ===');

// Complex scenario: Employee management system
console.log('\n--- Employee Management Simulation ---');

function processEmployee(salary: number | string): string {
  const employee = createEmployee(salary);
  const type = isDirector(employee) ? 'Director' : 'Teacher';
  const task = executeWork(employee);
  
  return `Salary: ${salary} → Employee Type: ${type} → Current Task: ${task}`;
}

// Test various salary scenarios
const salaryTests = [100, 500, 750, '$400', '$600', 250, 1000];
salaryTests.forEach(salary => {
  console.log(processEmployee(salary));
});

// Demonstrate method chaining and type safety
console.log('\n--- Method Polymorphism ---');

function getEmployeeCapabilities(employee: Employee): object {
  return {
    canWorkFromHome: employee.workFromHome(),
    breakPolicy: employee.getCoffeeBreak(),
    primaryTasks: isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks(),
    employeeType: isDirector(employee) ? 'Management' : 'Faculty'
  };
}

console.log('Teacher capabilities:', getEmployeeCapabilities(new Teacher()));
console.log('Director capabilities:', getEmployeeCapabilities(new Director()));

// Subject scheduling system
console.log('\n--- Academic Scheduling System ---');

function createWeeklySchedule(): Record<string, Subjects> {
  return {
    Monday: "Math",
    Tuesday: "History", 
    Wednesday: "Math",
    Thursday: "History",
    Friday: "Math"
  };
}

const schedule = createWeeklySchedule();
Object.entries(schedule).forEach(([day, subject]) => {
  console.log(`${day}: ${teachClass(subject)}`);
});

console.log('\n=== TYPESCRIPT FEATURES DEMONSTRATED ===');
console.log('✓ Interface implementation for classes');
console.log('✓ Union types (Director | Teacher)');
console.log('✓ Type predicates (employee is Director)');  
console.log('✓ Factory pattern with conditional type creation');
console.log('✓ String literal types with restricted values');
console.log('✓ Polymorphism through interface contracts');
console.log('✓ Type safety with compile-time checking');
console.log('✓ Method overloading through interface implementation');
