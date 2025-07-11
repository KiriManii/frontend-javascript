// task_3/js/main.ts
// This file demonstrates how to use ambient declarations with external JavaScript libraries

/// <reference path="crud.d.ts" />
// This triple slash directive tells TypeScript to include the ambient declarations from crud.d.ts
// It's like saying "Hey TypeScript, before you compile this file, make sure you know about the types in crud.d.ts"

// Import our custom types from the interface file
import { RowID, RowElement } from "./interface";

// Import the JavaScript library using our ambient declarations
// TypeScript now knows the types of these functions thanks to crud.d.ts
import * as CRUD from "./crud";

// Create a row object using our RowElement interface
// Notice we're using the exact names specified in the assignment
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and capture the returned ID
// TypeScript knows that insertRow returns a RowID (which is a number)
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age field
// This demonstrates how optional properties work
const updatedRow: RowElement = {
  firstName: "Guillaume", 
  lastName: "Salva",
  age: 23
};

// Update the row using the ID we got from insertion
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

// Additional demonstrations to show the power of this approach
console.log('=== AMBIENT NAMESPACE DEMONSTRATION ===');
console.log('Original row:', row);
console.log('New row ID:', newRowID);
console.log('Updated row:', updatedRow);

// Demonstrate type safety - these would cause errors if uncommented:
// const badRow: RowElement = { firstName: "Test" }; // ❌ Missing lastName
// const badID: RowID = "not a number"; // ❌ RowID must be a number
// CRUD.insertRow("not an object"); // ❌ insertRow expects a RowElement

console.log('✓ Type safety maintained while using external JavaScript library');
console.log('✓ Ambient declarations provide TypeScript integration for existing code');
console.log('✓ Triple slash directives include necessary type information');
