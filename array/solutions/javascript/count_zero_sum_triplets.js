function main (input) {
  /**
   * Write JavaScript code from here
   */
  const lines = input.split("\n");
  const n = parseInt(lines[0], 0);
  let numberMap = {};
  const numbers = lines[1].split(' ').map((val, key) => {
      numberMap[val] = key;
      return Number(val);
  });


  let threeSum = (numbers, numberMap) => {
      let counter = 0;
      for (let i = 0; i < n - 1; i++) {
          for (let j = i + 1; j < n; j++) {
              let target = -(numbers[i] + numbers[j]);
              let k = numberMap[target];
              if (k !== undefined && i < j && j < k) {
                  counter++;
              }
          }
      }
      return counter;
  }
  
  const result = threeSum(numbers, numberMap);

  console.log(result);

}

let input = "";
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  main(input.trim());
});