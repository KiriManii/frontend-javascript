// task_4/js/subjects/React.ts
// This file adds React teaching capabilities through declaration merging

namespace Subjects {
  
  // Declaration merging: Adding React experience to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;  // Optional property for React teaching experience
  }
  
  // React class for teaching React development
  export class React extends Subject {
    
    // Method that returns the requirements for learning React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
    
    // Method that checks teacher availability based on React experience
    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
    
  }
  
}
