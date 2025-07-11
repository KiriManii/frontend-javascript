// Tasks 1-4: Complete TypeScript Interface and Class Implementation
// Pan-African Educational System Example
// This file demonstrates interfaces, inheritance, function interfaces, and classes
// with examples from educational institutions across Africa

// ===== TASK 1: TEACHER INTERFACE =====

// Define the Teacher interface with all the special TypeScript features
interface Teacher {
  // Readonly properties: Can only be set when the object is first created
  // Think of these like information on official university credentials
  readonly firstName: string;
  readonly lastName: string;
  
  // Required properties: These must always be present for any Teacher
  fullTimeEmployee: boolean;  // Every teacher must have employment status defined
  location: string;           // Every teacher must have a location
  
  // Optional property: The ? makes this optional
  // Not every teacher has experience when they start their career
  yearsOfExperience?: number;
  
  // Index signature: This allows ANY additional properties beyond what we've defined
  // [key: string] means "any property name that's a string"
  // any means "any type of value for that property"
  // This gives us flexibility to add custom properties like specialization, research areas, etc.
  [key: string]: any;
}

// ===== TASK 2: DIRECTORS INTERFACE (EXTENDS TEACHER) =====

// Directors interface that extends Teacher
// The 'extends' keyword means "inherit all properties from Teacher and add new requirements"
// A Director IS a Teacher, but with additional administrative responsibilities
interface Directors extends Teacher {
  // This is the only new requirement specific to Directors
  // But remember: Directors automatically inherit ALL Teacher requirements too
  numberOfReports: number;
}

// ===== TASK 3: FUNCTION INTERFACES =====

// Function interface definition: This creates a contract for name formatting functions
// Think of this as a blueprint that any name-formatting function must follow
interface printTeacherFunction {
  // This syntax defines the function signature:
  // (parameter1: type, parameter2: type) => returnType
  (firstName: string, lastName: string): string;
}

// ===== TASK 4: CLASS INTERFACES =====

// Interface for the StudentClass constructor
// This describes what parameters the constructor should accept
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass itself
// This describes what methods and properties the class should have
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ===== CREATING TEACHER EXAMPLES =====

// Example 1: A basic teacher with just required fields
const teacher1: Teacher = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  fullTimeEmployee: true,
  location: 'Boston'
  // Note: no yearsOfExperience because it's optional
};

// Example 2: A teacher with experience
const teacher2: Teacher = {
  firstName: 'Michael',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'Seattle',
  yearsOfExperience: 5
};

// Example 3: The exact example from the assignment - with additional properties
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,  // This custom property is allowed because of our index signature!
};

// ===== CREATING DIRECTOR EXAMPLES =====

// Example 1: The exact director example from the assignment
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Example 2: Additional director with more properties
const director2: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  yearsOfExperience: 20,
  numberOfReports: 25,
  department: 'Computer Science',
  hasAdvancedDegree: true
};

// ===== IMPLEMENTING THE PRINT TEACHER FUNCTION =====

// Implementation of the printTeacher function that follows our interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Extract the first character of the firstName and make it uppercase
  const firstInitial = firstName.charAt(0).toUpperCase();
  
  // Combine the initial with a period and the full last name
  return `${firstInitial}. ${lastName}`;
};

// Alternative implementation for formal African academic settings
const printTeacherFormal: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName.toUpperCase()}`;
};

// Implementation suitable for casual African educational contexts
const printTeacherCasual: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstInitial = firstName.slice(0, 1).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};

// ===== TASK 4: IMPLEMENTING THE STUDENT CLASS =====

// The StudentClass implementation that follows both interfaces
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  // Constructor that matches the StudentClassConstructor interface
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns the student's work status
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the student's first name for display
  displayName(): string {
    return this.firstName;
  }

  // Additional method to get full name (not required by interface but useful)
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to get formatted name using our print function
  getFormattedName(): string {
    return printTeacher(this.firstName, this.lastName);
  }
}

// ===== CREATING STUDENT EXAMPLES =====

// Students for testing our StudentClass
const student1 = new StudentClass("Alice", "Johnson");
const student2 = new StudentClass("Bob", "Smith");       
const student3 = new StudentClass("Carol", "Williams");
const student4 = new StudentClass("David", "Brown");

// Array of all students
const studentsList: StudentClass[] = [
  student1, student2, student3, student4
];

// ===== DEMONSTRATING THE INHERITANCE RELATIONSHIP =====

// This array can hold both Teachers and Directors because Directors extend Teacher
const allEducators: Teacher[] = [
  teacher1, teacher2, teacher3, director1, director2
];

// ===== UTILITY FUNCTIONS FOR AFRICAN EDUCATIONAL SYSTEM =====

// Function that works with any Teacher (including Directors due to inheritance)
function introduceEducator(educator: Teacher): string {
  const experience = educator.yearsOfExperience 
    ? ` with ${educator.yearsOfExperience} years of experience`
    : '';
  
  const employment = educator.fullTimeEmployee ? 'full-time' : 'part-time';
  
  return `Salaam! I'm ${educator.firstName} ${educator.lastName}, a ${employment} educator at our institution in ${educator.location}${experience}.`;
}

// Function that specifically works with Directors only
function introduceDirector(director: Directors): string {
  const baseIntro = introduceEducator(director);
  return `${baseIntro} I oversee ${director.numberOfReports} faculty members.`;
}

// Function to create email signatures 
function createEmailSignature(educator: Teacher, institution: string): string {
  const formattedName = printTeacher(educator.firstName, educator.lastName);
  const status = educator.fullTimeEmployee ? 'Full-time Faculty' : 'Part-time Faculty';
  const dept = educator.department ? `\n${educator.department}` : '';
  return `${formattedName}${dept}\n${status}\n${institution}\n${educator.location}`;
}

// Function to process student homework status
function checkHomeworkStatus(students: StudentClass[]): void {
  console.log('\n=== STUDENT HOMEWORK STATUS ===');
  students.forEach(student => {
    console.log(`${student.displayName()}: ${student.workOnHomework()}`);
  });
}

// Function to create class roster
function createClassRoster(students: StudentClass[]): string[] {
  return students.map(student => student.getFormattedName());
}

// ===== COMPREHENSIVE CONSOLE OUTPUT =====

console.log('=== TYPESCRIPT INTERFACE AND CLASS DEMONSTRATION ===');
console.log('Tasks 1-4: Teacher Interface, Directors Extension, Function Interface, and Student Class\n');

console.log('=== TEACHER EXAMPLES ===');
console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
console.log('Teacher 3 (from assignment):', teacher3);

console.log('\n=== DIRECTOR EXAMPLES ===');
console.log('Director 1 (from assignment):', director1);
console.log('Director 2:', director2);

console.log('\n=== INHERITANCE IN ACTION ===');
console.log('Faculty introductions:');
allEducators.forEach((educator, index) => {
  console.log(`${index + 1}. ${introduceEducator(educator)}`);
});

console.log('\n=== PRINT TEACHER FUNCTION EXAMPLES ===');
console.log('Assignment example - printTeacher("John", "Doe"):', printTeacher("John", "Doe"));
console.log('Teacher 1 formatted:', printTeacher(teacher1.firstName, teacher1.lastName));
console.log('Teacher 2 formatted:', printTeacher(teacher2.firstName, teacher2.lastName));

console.log('\n=== EMAIL SIGNATURES ===');
console.log(createEmailSignature(teacher1, 'Boston University'));
console.log('---');
console.log(createEmailSignature(director1, 'University of London'));

console.log('\n=== STUDENT CLASS DEMONSTRATIONS ===');
console.log('Student 1 - Display name:', student1.displayName());
console.log('Student 1 - Full name:', student1.getFullName());
console.log('Student 1 - Homework status:', student1.workOnHomework());
console.log('Student 1 - Formatted name:', student1.getFormattedName());

console.log('\nAll students:');
studentsList.forEach((student, index) => {
  console.log(`${index + 1}. ${student.getFullName()}`);
});

// Check homework status for all students
checkHomeworkStatus(studentsList);

console.log('\n=== CLASS ROSTER (FORMATTED NAMES) ===');
const roster = createClassRoster(studentsList);
roster.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

console.log('\n=== DIRECTOR MANAGEMENT INFORMATION ===');
console.log(`${director1.firstName} manages ${director1.numberOfReports} faculty members in ${director1.location}`);
console.log(`${director2.firstName} oversees ${director2.numberOfReports} faculty members`);

// ===== TYPE CHECKING AND POLYMORPHISM EXAMPLES =====

console.log('\n=== TYPE CHECKING EXAMPLES ===');

// Type guard function to check if an educator is a Director
function isDirector(educator: Teacher): educator is Directors {
  return 'numberOfReports' in educator;
}

// Using the type guard to safely access Director-specific properties
allEducators.forEach((educator, index) => {
  if (isDirector(educator)) {
    console.log(`Educator ${index + 1}: ${educator.firstName} is a Director managing ${educator.numberOfReports} faculty members`);
  } else {
    console.log(`Educator ${index + 1}: ${educator.firstName} is a Teacher`);
  }
});

// ===== DEMONSTRATING READONLY PROPERTY PROTECTION =====

console.log('\n=== READONLY PROPERTY DEMONSTRATION ===');
console.log('Original teacher name:', teacher1.firstName, teacher1.lastName);

// We CAN modify non-readonly properties
teacher1.fullTimeEmployee = false;
teacher1.currentCourse = 'Introduction to Computer Science';

console.log('Modified employment status:', teacher1.fullTimeEmployee);
console.log('Added current course:', teacher1.currentCourse);

// The following lines would cause TypeScript errors if uncommented:
// teacher1.firstName = 'NewName';     // ❌ Error: readonly property
// director1.lastName = 'NewSurname'; // ❌ Error: readonly property

console.log('\n=== TYPESCRIPT FEATURES DEMONSTRATED ===');
console.log('✓ Interface creation with readonly, required, and optional properties');
console.log('✓ Interface inheritance (Directors extends Teacher)');
console.log('✓ Index signatures for flexible object properties');
console.log('✓ Function interfaces for consistent function contracts');
console.log('✓ Class interfaces and implementation');
console.log('✓ Type guards for safe type checking');
console.log('✓ Polymorphism with inheritance relationships');
