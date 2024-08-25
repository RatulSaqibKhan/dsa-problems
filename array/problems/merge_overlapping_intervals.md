# Merge Overlapping Intervals

## Problem Statement

You are given an array of intervals. You have to merge the overlapping intervals and print them in sorted order of their start time.

## Input

The input consists of `N + 1` lines. The first line contains one integer `N`. The next `N` lines contain `N` intervals, each specified by two integers `l` and `r` where `(l ≤ r)`.

## Output

Print the intervals after merging. Print them in sorted order of their start time.

## Constraints

- 1 ≤ N ≤ 10^5
- -10^9 ≤ l ≤ r ≤ 10^9

## Example 1

**Input:**
```
3
1 4
3 5
7 8
```
**Output:**
```
1 5
7 8
```
## Example 2

**Input:**
```
2
-1 3
5 8
```
**Output:**
```
-1 3
5 8
```

## Explanation

In the first example, the intervals `[1, 4]` and `[3, 5]` overlap and are merged into `[1, 5]`. The remaining interval `[7, 8]` does not overlap with any other interval and remains unchanged.

In the second example, the intervals `[-1, 3]` and `[5, 8]` do not overlap and are printed as is.

