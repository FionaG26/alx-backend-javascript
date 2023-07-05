# 0x04. Typescript

## Tasks

### 0. Creating an interface for a student

0x04-TypeScript/
└── task_0/
    ├── js/
    │   └── main.ts
    ├── package.json
    ├── .eslintrc.js
    ├── tsconfig.json
    └── webpack.config.js

#### task_0/js/main.ts
In the main.ts file, you need to define an interface named "Student" that specifies the properties of a student (firstName, lastName, age, and location). Then, create two student objects using the defined interface and store them in the "studentsList" array.

Render the table using vanilla JavaScript: In this step, you need to create an HTML table dynamically using JavaScript and append it to the document body. First, create the table element and add it to the document. Then, create table headers (First Name, Location) and add them to the table. Finally, iterate over the "studentsList" array, create a new row for each student, and append it to the table. Each row should contain the first name of the student and their location.

Build the code: Run the command "npm run build" in the "task_0" directory. This will trigger Webpack to build and bundle your code, generating a bundled JavaScript file and an HTML file.

View the rendered table: Open the generated "index.html" file in a web browser to see the rendered table. You should be able to see the student information displayed in the table.

## Task 1 - Let's build a Teacher interface
Files:
task_1/js/main.ts
task_1/package.json
task_1/tsconfig.json
task_1/webpack.config.js
Description: In this task, you will create a directory named task_1 and copy the configuration files provided. You will then define an interface named Teacher with attributes firstName, lastName, fullTimeEmployee, yearsOfExperience, and location. The attributes firstName and lastName should be readonly and the yearsOfExperience attribute should be optional. Additionally, you will add the possibility to add any attribute to the Teacher object without specifying the name of the attribute.

## Task 2 - Extending the Teacher class
Files:
task_2/js/main.ts
task_2/webpack.config.js
task_2/tsconfig.json
task_2/package.json
Description: In this task, you will create an interface named Directors that extends the Teacher interface and requires an additional attribute named numberOfReports. You will then create an object director1 with the required attributes.

## Task 3 - Printing teachers
Files:
task_2/js/main.ts
Description: In this task, you will write a function named printTeacher that accepts firstName and lastName as arguments and returns the first letter of the firstName followed by a dot and the full lastName. You will then define an interface named printTeacherFunction for this function.

## Task 4 - Writing a class
Files:
task_2/js/main.ts
Description: In this task, you will write a class named StudentClass that accepts firstName and lastName as constructor arguments. The class should have methods workOnHomework and displayName. The class and its constructor should be described through an interface.

## Task 5 - Advanced types Part 1
Files:
task_2/js/main.ts
Description: In this task, you will create two interfaces DirectorInterface and TeacherInterface with methods workFromHome, getCoffeeBreak, and workDirectorTasks or workTeacherTasks respectively. You will then implement classes Director and Teacher that implement the respective interfaces. Additionally, you will write a function createEmployee that returns either a Director or a Teacher instance based on the provided salary.
