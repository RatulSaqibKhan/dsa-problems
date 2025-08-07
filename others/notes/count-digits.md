# 🧮 Notes: Count the Number of Digits in a Number

## 📌 Problem Statement

Given a non-negative integer `n`, determine how many digits it has.

### ✅ Examples

| Input     | Output | Explanation                      |
|-----------|--------|----------------------------------|
| `0`       | `1`    | 0 is a single digit              |
| `7`       | `1`    | One digit: 7                    |
| `42`      | `2`    | Digits: 4, 2                     |
| `100001`  | `6`    | Digits: 1, 0, 0, 0, 0, 1         |
| `1234567` | `7`    | Digits: 1, 2, 3, 4, 5, 6, 7       |

---

## 🎯 Goal

Return how many digits exist in the given integer **without converting it to a string**.

---

## 🧠 Approach 1: Brute Force (Using Division)

### 🔹 Idea:
We repeatedly divide the number by 10 and count how many times we can do that before it becomes 0.

### 🧾 Steps:
1. Initialize a `count = 0`
2. While `n > 0`:
   - Increment `count` by 1
   - Divide `n` by 10 using integer division (`n = n // 10`)
3. Return `count`
4. Special Case: If `n == 0`, return 1 (since 0 is one digit)

### 🔄 Example (n = 4725):

| n       | count |
|---------|--------|
| 4725    | 1      |
| 472     | 2      |
| 47      | 3      |
| 4       | 4      |
| 0       | Done   |

→ Final count = 4

### 🧮 Time & Space Complexity:
- **Time**: `O(d)` where `d` = number of digits in `n`
- **Space**: `O(1)`

---

## 🧠 Approach 2: Logarithmic Method (Mathematical Trick)

### 🔹 Idea:
We use the fact that:
```
Number of digits in n = floor(log10(n)) + 1
```

This is because:
- `log10(n)` tells us how many digits are "before" the decimal place
- Adding 1 gives the total number of digits

### 🧾 Steps:
1. If `n == 0`, return 1
2. Use the math module: `math.floor(math.log10(n)) + 1`

### 🧮 Example (n = 4725):
```
log10(4725) ≈ 3.674
floor(3.674) = 3
3 + 1 = 4 digits
```

### 📦 Complexity:
- **Time**: `O(1)` (one mathematical operation)
- **Space**: `O(1)`

### 📌 Requirements:
- You must import the `math` module to use `log10()`.

---

## 🆚 Brute Force vs Logarithmic

| Feature         | Brute Force           | Logarithmic              |
|------------------|------------------------|----------------------------|
| Approach         | Loop & division        | Mathematical shortcut      |
| Time Complexity  | `O(d)`                 | `O(1)`                     |
| Space Complexity | `O(1)`                 | `O(1)`                     |
| Accuracy         | Always exact           | Requires floating-point math |
| Needs `math` lib | ❌ No                  | ✅ Yes                     |
| Handles large n  | ✅ Yes                 | ✅ Yes (with care)         |

---

## ✍️ Summary

Both approaches are valid and efficient for counting digits:

- Use **brute force** if you're avoiding imports or prefer step-by-step logic.
- Use **logarithmic method** if you want a one-liner and don’t mind importing `math`.

---

## 💡 Bonus Challenge

Try implementing:
- A **recursive version** of the brute-force approach
- A version that works with **negative numbers**
- A version that counts digits **without any loop, recursion, or math functions** — is it possible?

