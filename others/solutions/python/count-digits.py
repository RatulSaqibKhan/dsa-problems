from typing import List
import math

class CountDigits:

  def solution(self, n: int) -> int:
    if n == 0:
      return 1
    result = self.optimization(n)

    return result
  
  def optimization(self, n: int) -> int:
    power = math.floor(math.log10(n))
    result = power + 1
    return result

  def recursion(self, n: int, result: int = 0) -> int:
    if n <= 0:
      return result
    n = n // 10
    result += 1
    return self.recursion(n, result)

  def brootForce(self, n: int) -> int:
    result = 0

    while n > 0:
      n = n // 10
      result += 1
    
    return result
  
if __name__ == "__main__":
  try:
    n = int(input("Enter a non-negative integer: "))
    if n < 0:
      raise ValueError("Only non-negative integers are allowed.")

    solutionClass = CountDigits()
    result = solutionClass.solution(n)
    print("Result:", result)

  except ValueError as e:
    print("Invalid input:", e)