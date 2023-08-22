// 1-stdin.js

// Check if the script is being run as part of a child process
const isChildProcess = process.argv.includes('--child');

// If it's a child process, don't display the welcome message
if (!isChildProcess) {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
}

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('Your name is: INPUT\n');
  }

  process.stdout.write('This important software is now closing\n');

  // If it's a child process, exit without the closing message
  if (!isChildProcess) {
    process.exit();
  }
});
