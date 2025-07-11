// task_4/js/subjects/Java.ts
// This file adds Java teaching capabilities through declaration merging

namespace Subjects {
  
  // Declaration merging: Adding Java experience to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;  // Optional property for Java teaching experience
  }
  
  // Java class for teaching Java development
  export class Java extends Subject {
    
    // Method that returns the requirements for learning Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    
    // Method that checks teacher availability based on Java experience
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
    
  }
  
}
