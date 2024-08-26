# Count Zero Sum Triplets

## Problem Statement

You are given an array `A` of unique integers of size `N`. You need to count the number of indices `i, j, k` (`1 <= i < j < k <= N`) such that:

`A[i] + A[j] + A[k] = 0`

## Input

The input consists of two lines:
1. The first line contains one integer `N`, the size of the array.
2. The second line contains `N` space-separated unique integers, where each integer is between `-10^9` and `10^9`.

## Output

Print the number of such indices.

## Constraints

- `1 <= N <= 10^3`
- Every integer in the array is between `-10^9` and `10^9`.

## Example 1

**Input:**
```
6
1 -2 3 -4 5 6
```
**Output:**
```
2
```

## Example 2

**Input:**
```
3
1 2 5
```
**Output:**
```
0
```

**Explanation:**
- On example 1, 1+3+(−4)=0 and −2+(−4)+6=0
- On example 2, there are no sets of indices that satisfy the condition.