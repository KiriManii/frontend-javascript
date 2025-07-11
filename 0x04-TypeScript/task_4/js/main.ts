// task_4/js/main.ts
// This file demonstrates how to use the namespace system we've built
// Task 10: Using our educational platform

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// These triple slash directives tell TypeScript to include all our namespace files
// This ensures TypeScript understands our complete Subjects namespace before compiling this file

// Create subject instances as required by the assignment
// Note: NO export statements needed with namespaces!
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Create a teacher with C++ experience as specified in the assignment
const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva", 
  experienceTeachingC: 10
};

// Demonstrate the complete system working together
console.log('=== EDUCATIONAL PLATFORM DEMONSTRATION ===');

// C++ Subject demonstration
console.log('\n--- C++ Subject ---');
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject demonstration  
console.log('\n--- Java Subject ---');
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject demonstration
console.log('\n--- React Subject ---');
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// Additional demonstrations to show the power of declaration merging
console.log('\n=== DECLARATION MERGING DEMONSTRATION ===');

// Create teachers with different specializations
const reactTeacher: Subjects.Teacher = {
  firstName: "Sarah",
  lastName: "Johnson",
  experienceTeachingReact: 5
};

const javaTeacher: Subjects.Teacher = {
  firstName: "Michael", 
  lastName: "Chen",
  experienceTeachingJava: 8
};

const fullStackTeacher: Subjects.Teacher = {
  firstName: "Emily",
  lastName: "Rodriguez", 
  experienceTeachingC: 6,
  experienceTeachingReact: 4,
  experienceTeachingJava: 7
};

// Test each teacher with different subjects
console.log('\n--- Testing React Teacher ---');
react.setTeacher(reactTeacher);
console.log('React teacher for React:', react.getAvailableTeacher());
cpp.setTeacher(reactTeacher);
console.log('React teacher for C++:', cpp.getAvailableTeacher());

console.log('\n--- Testing Java Teacher ---'); 
java.setTeacher(javaTeacher);
console.log('Java teacher for Java:', java.getAvailableTeacher());
react.setTeacher(javaTeacher);
console.log('Java teacher for React:', react.getAvailableTeacher());

console.log('\n--- Testing Full-Stack Teacher ---');
cpp.setTeacher(fullStackTeacher);
console.log('Full-stack teacher for C++:', cpp.getAvailableTeacher());
react.setTeacher(fullStackTeacher);
console.log('Full-stack teacher for React:', react.getAvailableTeacher());
java.setTeacher(fullStackTeacher);
console.log('Full-stack teacher for Java:', java.getAvailableTeacher());

console.log('\n=== NAMESPACE FEATURES DEMONSTRATED ===');
console.log('✓ Namespace organization keeps related code together');
console.log('✓ Declaration merging extends interfaces across multiple files');
console.log('✓ Class inheritance provides shared functionality');
console.log('✓ Modular architecture enables easy extension and maintenance');
console.log('✓ Type safety ensures teachers are properly qualified for subjects');
