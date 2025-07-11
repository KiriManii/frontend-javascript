// task_4/js/subjects/Subject.ts
// This file provides the base Subject class that all specific subjects will extend

namespace Subjects {
  
  // The base Subject class that provides common functionality for all subjects
  // This uses the Teacher interface we defined in Teacher.ts
  export class Subject {
    // Private property to store the current teacher
    // Using the Teacher interface ensures type safety
    teacher: Teacher;
    
    // Setter method that allows changing the teacher for this subject
    // This demonstrates encapsulation - controlled access to the teacher property
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
  
}
