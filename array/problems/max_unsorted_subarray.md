# Max Unsorted Subarray

## Problem Statement

You are given an array of integers. You have to find the maximum subarray such that sorting this subarray makes the entire array sorted.

## Input

The input consists of two lines:
1. The first line contains one integer `N`, the number of integers in the array.
2. The second line contains `N` space-separated integers where each integer is between `-10^9` and `10^9`.

## Output

Print two integers: the start and end index of the subarray. The indices are 0-based. If the entire array is already sorted, print `-1`.

## Constraints

- `2 ≤ N ≤ 10^5`
- Each integer in the array is between `-10^9` and `10^9`.

## Example 1

**Input:**
```
3
2 -1 3
```
**Output:**
```
1 2
```
## Example 2

**Input:**
```
5
1 2 3 3 5
```
**Output:**
```
-1
```

**Explanation:**
On example 1, if we sort sub-array `[2,−1]` then the array will be sorted.
