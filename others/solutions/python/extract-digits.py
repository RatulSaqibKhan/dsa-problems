from typing import List

class ExtractDigits:

  def solution(self, n: int) -> List[int]:
    if n == 0:
      return [0]
    result = self.recursion(n)

    return result[::-1]
  
  def recursion(self, n: int) -> List[int]:
    result = []
    remainder = n % 10
    n = int(n / 10)
    result.append(remainder)
    if n > 0:
      self.recursion(n, result)
    return result


  def brootForce(self, n: int) -> List[int]:
    result = []

    while n > 0:
      remainder = n % 10
      n = int(n / 10)
      result.append(remainder)
    
    return result
  
if __name__ == "__main__":
  try:
    n = int(input("Enter a non-negative integer: "))
    if n < 0:
      raise ValueError("Only non-negative integers are allowed.")

    extractor = ExtractDigits()
    digits = extractor.solution(n)
    print("Extracted digits:", digits)

  except ValueError as e:
    print("Invalid input:", e)