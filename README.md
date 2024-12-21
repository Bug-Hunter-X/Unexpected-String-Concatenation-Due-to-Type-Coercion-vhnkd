# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle JavaScript bug related to type coercion during arithmetic operations.  The `foo` function intends to perform numerical addition, but due to JavaScript's loose typing, it inadvertently performs string concatenation when different types are encountered.

The `bug.js` file contains the erroneous code. The `bugSolution.js` demonstrates the corrected code and how to avoid this issue.

## Bug Description:
In JavaScript, the `+` operator performs both addition and string concatenation.  If one operand is a string, the other operand is coerced into a string before concatenation occurs. This leads to unexpected results when performing math operations.

## Solution:
Explicitly convert operands to numbers using `parseInt()` or `parseFloat()` before performing addition to ensure numerical operations.

## How to Run the Code:
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run each file in a JavaScript environment (e.g., Node.js or a browser's console) to observe the differing outputs.