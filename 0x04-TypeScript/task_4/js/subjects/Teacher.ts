// task_4/js/subjects/Teacher.ts
// This file establishes the base Teacher interface within the Subjects namespace

// All our educational code lives in the Subjects namespace
// This keeps it organized and prevents naming conflicts with other parts of the application
namespace Subjects {
  
  // The base Teacher interface that all subjects can extend
  // This defines the minimum requirements for any teacher in our system
  export interface Teacher {
    firstName: string;
    lastName: string;
    // Each subject will add its own optional experience properties through declaration merging
  }
  
}
