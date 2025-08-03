# 🧠 Theoretical Approach: Extract Digits from a Given Number

## 📝 Problem Definition

Given a non-negative integer `n`, extract all the digits from the number and return them in a list or array in the **same order** as they appear in the original number.

---

## 🔍 Understanding the Problem

Digits of a number are the individual values from left to right. For example:

- `n = 4725` → Digits: `[4, 7, 2, 5]`
- `n = 0` → Digits: `[0]`
- `n = 1009` → Digits: `[1, 0, 0, 9]`

The challenge is to separate these digits and preserve their order, without using high-level utilities like `str(n)` unless explicitly allowed.

---

## 🔧 Algorithmic Strategies

### ✅ Goal:
Extract digits **one-by-one** from the number `n`, then arrange them in **left-to-right** order.

There are two main algorithmic approaches to do this:

---

## 1. **Iterative (Brute Force) Approach**

### 🔹 Idea:
- Use a loop to repeatedly divide the number by 10.
- In each iteration:
  - Use `n % 10` to get the **last digit**
  - Use `n = n // 10` to remove the last digit
- Since this gives digits from **right to left**, store them in reverse order and **reverse the list** at the end to restore left-to-right order.

### 🔄 Steps:
1. Initialize an empty list `digits = []`
2. While `n > 0`:
   - `digit = n % 10` → extract last digit
   - `digits.append(digit)` → store the digit
   - `n = n // 10` → remove the last digit
3. Reverse the list `digits` to maintain original order

### 🕒 Time & Space Complexity:
- Time: `O(d)` (where `d = number of digits`)
- Space: `O(d)`

---

## 2. **Recursive Approach**

### 🔹 Idea:
- Use recursion to peel off the digits from the **end**, and build the list **from back to front**.
- Append each last digit (`n % 10`) to a result list.
- Recursive call continues with `n = n // 10` until `n == 0`
- After recursion, **reverse the result list** to get the correct order.

### 📌 Key Insight:
Recursion preserves the call stack, allowing the digits to be collected in reverse as you return back up the stack.

### 🔄 Steps:
1. Define a helper function `recursion(n, result)`
2. If `n == 0`, return
3. Extract `digit = n % 10`
4. Append it to `result`
5. Call `recursion(n // 10, result)`
6. After recursion ends, reverse the `result`

### 🕒 Time & Space Complexity:
- Time: `O(d)` — 1 operation per digit
- Space:
  - `O(d)` list space for digits
  - `O(d)` call stack for recursion

---

## 3. **String-Based Approach (Alternative)**

### 🔹 Idea:
- Convert the number to a string: `str(n)`
- Iterate over each character and convert back to int: `int(char)`

### ⚠️ Note:
This method is simple and efficient but may not be allowed in interviews or algorithmic problem solving where **"no string conversion"** is a constraint.

---

## 🧠 Conceptual Summary

| Method       | Pros                        | Cons                          |
|--------------|-----------------------------|-------------------------------|
| Iterative    | Simple and efficient        | Requires manual reversal      |
| Recursive    | Elegant, uses call stack    | Slightly more complex; stack space usage |
| String-based | One-liner, easy to read     | May be restricted in challenges |

---

## 🧪 Key Takeaways

- Use modulus (`%`) and integer division (`//`) to extract digits.
- Always account for **order**: digits extracted from right to left must be reversed.
- Choose recursion or iteration based on readability vs. memory trade-offs.

---

## 🧩 You Should Be Able To:

- Explain how modulus and division extract digits
- Implement both iterative and recursive versions
- Analyze time and space complexity for each
