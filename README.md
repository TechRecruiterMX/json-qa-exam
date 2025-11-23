# JSON QA Automation Exam – JavaScript

## Objective
Implement the function `compareJson(expected, actual)` to detect differences between two JSON structures.

### Must detect:
- Value mismatches
- Missing keys
- Extra keys
- Type mismatches
- Array order mismatches
- Deep nested differences

### Output format example:
[
  { "path": "user.address.zip", "expected": "64000", "actual": 64000, "type": "type-mismatch" }
]

## How to submit your solution
1. Fork this repository
2. Create a branch named `solution`
3. Implement your solution in `/src/compareJson.js`
4. Run tests with:
