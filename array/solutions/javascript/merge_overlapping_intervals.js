function main (input) {
  /**
   * Write JavaScript code from here
   */
  // Split input into lines
  const lines = input.split("\n");
  
   // Read number of intervals
  const n = parseInt(lines[0], 10);

  // Read the intervals
  const intervals = [];
  for (let i = 1; i <= n; i++) {
      const [l, r] = lines[i].split(' ').map(Number);
      intervals.push([l, r]);
  }

  // Function to merge intervals
  function mergeIntervals(intervals) {
      // Sort intervals based on the starting time
      intervals.sort((a, b) => a[0] - b[0]);

      const merged = [];
      for (let interval of intervals) {
          // If merged is empty or the current interval does not overlap with the previous
          if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
              merged.push(interval);
          } else {
              // Merge the current interval with the previous one
              merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
          }
      }
      return merged;
  }

  // Merging intervals
  const mergedIntervals = mergeIntervals(intervals);

  // Printing output
  for (let interval of mergedIntervals) {
      console.log(interval[0] + ' ' + interval[1]);
  }

}

let input = "";
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  main(input.trim());
});