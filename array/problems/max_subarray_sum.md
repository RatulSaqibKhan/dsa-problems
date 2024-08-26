# Max Subarray Sum

## Problem Statement

You are given an array of integers. You have to find the maximum subarray sum.

## Input

The input consists of two lines:
1. The first line contains one integer `N`, the number of integers in the array.
2. The second line contains `N` space-separated integers where each integer is between `-10^9` and `10^9`.

## Output

Print one integer, the maximum subarray sum.

## Constraints

- `1 <= N <= 10^5`
- Every integer in the array is between `-10^9` and `10^9`.

## Example 1

**Input:**
```
3
2 -1 3
```
**Output:**
```
4
```

## Example 2

**Input:**
```
5
-1 -2 -3 -4 -5
```
**Output:**
```
-1
```

**Notes:**

On example 1, there are six subarrays. 
```
[2]=2
[2,−1]=2+(−1)=1
[2,−1,3]=2+(−1)+3=4
[−1]=−1
[−1,3]=−1+3=2
[3]=3
```
So, the answer is 4.
