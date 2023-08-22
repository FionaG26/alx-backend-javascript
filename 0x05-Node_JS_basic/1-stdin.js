// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim removes leading/trailing whitespace

  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('Your name is: INPUT\n');
  }

  process.stdout.write('This important software is now closing\n');
  process.exit();
});
