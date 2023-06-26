export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true; // to const
      const task2 = false; // to const
    }
  
    return [task, task2];
  }
