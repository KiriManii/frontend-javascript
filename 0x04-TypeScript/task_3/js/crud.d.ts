// task_3/js/crud.d.ts
// This is an ambient declaration file that tells TypeScript about the crud.js library
// Ambient declarations describe the shape of existing JavaScript code

// Import the types we need from our interface file
import { RowID, RowElement } from "./interface";

// Declare the functions that exist in crud.js
// These declarations don't contain implementation, just type information
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Export the declarations so they can be used by other files
export { insertRow, deleteRow, updateRow };
