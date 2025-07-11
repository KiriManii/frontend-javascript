// task_4/js/subjects/Cpp.ts  
// This file demonstrates declaration merging by extending the Teacher interface
// and creating a Computer Science (C++) subject class

namespace Subjects {
  
  // Declaration merging: Adding C++ experience to the Teacher interface
  // This extends the original Teacher interface without modifying the original file
  export interface Teacher {
    experienceTeachingC?: number;  // Optional property for C++ teaching experience
  }
  
  // Cpp class extends the base Subject class with C++ specific functionality
  export class Cpp extends Subject {
    
    // Method that returns the requirements for learning C++
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    
    // Method that checks teacher availability based on C++ experience
    // This demonstrates how declaration merging gives us access to the new property
    getAvailableTeacher(): string {
      // Check if the teacher has C++ teaching experience
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
    
  }
  
}
