function main (input) {
  /**
   * Write JavaScript code from here
   */
  let lines = input.split("\n");
  let n = parseInt(lines[0], 10);
  let numbers = lines[1].split(' ').map(Number);

  let maxSum = numbers[0];
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
      let curNum = numbers[i];
      currentSum = Math.max(curNum, curNum + currentSum);
      maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
  
}

let input = "";
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  main(input.trim());
});