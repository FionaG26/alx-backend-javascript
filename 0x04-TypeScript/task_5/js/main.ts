// Define the MajorCredits interface with a brand
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// Define the MinorCredits interface with a brand
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: 'MajorCredits' };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: 'MinorCredits' };
}

// Example usage
const subject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const subject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const totalMajorCredits = sumMajorCredits(subject1, subject2);
console.log('Total Major Credits:', totalMajorCredits.credits);

const subject3: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const subject4: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const totalMinorCredits = sumMinorCredits(subject3, subject4);
console.log('Total Minor Credits:', totalMinorCredits.credits);
