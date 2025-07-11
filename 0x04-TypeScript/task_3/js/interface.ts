// task_3/js/interface.ts
// This file defines the core data types for our database-like system

// RowID is a type alias - it's just a number, but giving it a name makes our code more meaningful
// Think of this as saying "whenever we talk about row IDs, we mean numbers"
export type RowID = number;

// RowElement describes the structure of a data row in our system
// This is like defining the columns in a database table
export interface RowElement {
  firstName: string;    // Required field
  lastName: string;     // Required field  
  age?: number;         // Optional field (notice the ?)
}
