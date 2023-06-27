# 0x01. ES6 Promises
This project focuses on ES6 Promises in JavaScript. It covers various concepts and techniques related to Promises, including resolving, rejecting, handling multiple promises, error handling, async/await, and more.

## Learning Objectives
Promises (how, why, and what)
How to use the then, resolve, and catch methods
How to use every method of the Promise object
Error handling with throw and try
The await operator
How to use an async function

### Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file at the root of the project folder is mandatory
Your code shshould use the .js extension
Your code will be tested using Jest, and the command npm run test
Your code will be verified against lint using ESLint
All of your functions must be exported

### Setup
Install NodeJS 12.11.x in your home directory:

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
Expected output:

v12.11.1
6.11.3
Install Jest, Babel, and ESLint in your project directory:

npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint
Files
The project directory should have the following files:

package.json
babel.config.js
utils.js
.eslintrc.js

Make sure to run npm install to install the necessary packages mentioned in the package.json file.

### Task Details
## Task 0:. Keep every promise you make and only make promises you can keep
Implement the function getResponseFromAPI() that returns a Promise. The function should be defined in the file 0-promise.js.

## Task 1: .Don't make a promise...if you know you can't keep it
Implement the function getFullResponseFromAPI(success) that returns a Promise. The function should be defined in the file 1-promise.js. The function should resolve the Promise with an object containing the attributes status: 200 and body: 'Success' when success is true. If success is false, the Promise should be rejected with an error object with the message "The fake API is not working currently".

## Task 2: Catch me if you can!
Implement the function handleResponseFromAPI(promise) that takes a Promise as a parameter.
The function should be defined in the file 2-then.js.
Append three handlers to the promise:
When the Promise resolves, return an object with the attributes status: 200 and body: success.
When the Promise rejects, return an empty Error object.
For every resolution, log "Got a response from the API" to the console.
## Task 3: Handle multiple successful promises
Import the functions uploadPhoto and createUser from utils.js.
Implement the function handleProfileSignup() that returns a Promise.
The function should be defined in the file 3-all.js.
The function should collectively resolve the promises returned by uploadPhoto and createUser.
Log the attributes body, firstName, and lastName to the console.
In case of an error, log "Signup system offline" to the console.
## Task 4: Simple promise
Implement the function signUpUser(firstName, lastName) that returns a resolved Promise.
The function should be defined in the file 4-user-promise.js.
The Promise should resolve with an object containing the attributes firstName and lastName.
## Task 5: Reject the promises
Implement the function uploadPhoto(filename) that returns a Promise.
The function should be defined in the file 5-photo-reject.js.
The Promise should reject with an Error object and the message "$fileName cannot be processed".
## Task 6: Handle multiple promises
Import the functions signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
Implement the function handleProfileSignup(firstName, lastName, fileName) that returns a Promise.
The function should be defined in the file 6-final-user.js.
The function should call the signUpUser and uploadPhoto functions.
When all promises are settled, return an array of objects with the attributes status (status of the Promise) and value (value or error returned by the Promise).
## Task 7: Load balancer
Implement the function loadBalancer(chinaDownload, USDownload) that returns the value of the first resolved Promise.
The function should be defined in the file 7-load_balancer.js.
The function should accept two Promises as parameters: chinaDownload and USDownload.
Task 8: Throw error / try catch
Implement the function divideFunction(numerator, denominator) that accepts two numbers as arguments.
The function should be defined in the file 8-try.js.
If the denominator is equal to 0, the function should throw a new Error with the message "cannot divide by 0".
Otherwise, the function should return the result of dividing the numerator by the denominator.
## Task 9: Throw an error
Implement the function guardrail(mathFunction) that accepts a function as an argument.
The function should be defined in the file 9-try.js.
Inside the guardrail function, execute the mathFunction and append the result to an array named queue.
If mathFunction throws an error, append the error message to the queue.
In either case, append the message "Guardrail was processed" to the queue.
Return the queue array.
## Task 10: Stack order and setTimeout
Implement the function changeMode(size, weight, color) that returns a Promise.
The function should be defined in the file 10-force.js.
The Promise should resolve with an object containing the attributes size, weight, and color.
The Promise should be resolved after 500 milliseconds.
