// Define the Student interface
// An interface in TypeScript is like a contract that defines what properties an object should have
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects that follow our Student interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California"
};

// Create an array containing our students
const studentsList: Student[] = [student1, student2];

// Create and render the table using vanilla JavaScript
// First, we'll create a table element
const table = document.createElement('table');

// Add some basic styling to make it look nice
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

// Create the table header
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

// Style the headers
firstNameHeader.style.border = '1px solid black';
firstNameHeader.style.padding = '8px';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Loop through each student and create a row for them
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  // Create cells for first name and location
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  // Set the content of the cells
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  // Add some styling
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '8px';
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '8px';
  
  // Add the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Add the row to the table
  table.appendChild(row);
});

// Add the table to the document body
document.body.appendChild(table);
