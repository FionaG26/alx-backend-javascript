// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Fiona",
  lastName: "Githaiga",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "James",
  lastName: "Njihia",
  age: 22,
  location: "Atlanta",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const createTable = () => {
  const table = document.createElement("table");
  document.body.appendChild(table);

  // Create table headers
  const headers = ["First Name", "Location"];
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  // Create table rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });
};

createTable();

export { student1, student2, studentsList, createTable };
