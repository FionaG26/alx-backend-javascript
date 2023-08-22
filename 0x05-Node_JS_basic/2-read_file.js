const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and remove empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Initialize an object to store the count of students in each field
    const studentCountByField = {};

    // Iterate through the lines and count students in each field
    for (const line of lines) {
      const [, , , field] = line.split(',');
      if (field) {
        if (!studentCountByField[field]) {
          studentCountByField[field] = [];
        }
        const firstName = line.split(',')[0];
        studentCountByField[field].push(firstName);
      }
    }

    // Log the total number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and the list of first names
    for (const field in studentCountByField) {
      const count = studentCountByField[field].length;
      const list = studentCountByField[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
