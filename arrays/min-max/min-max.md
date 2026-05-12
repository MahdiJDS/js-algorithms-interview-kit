# Finding Min and Max in an Array

## Overview


In programming, we often need to determine the largest (maximum) or smallest (minimum) value within a list of numbers. This document explains how to write simple JavaScript functions to find these values in an array.

These functions are fundamental building blocks in algorithms and data processing. We'll explore two separate functions: max(arr) for finding the maximum value and min(arr) for finding the minimum value.

---


### Maximum Value Function

The max(arr) function takes an array of numbers as input and returns the largest number found within it.
```
function max(arr) {
    if (arr.length === 0) return null;

    let maxC = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (maxC < arr[i]) {
            maxC = arr[i];
        }
    }

    return maxC;
}


```


### Minimum Value Function

The min(arr) function takes an array of numbers as input and returns the smallest number found within it.

```
function min(arr) {
    if (arr.length === 0) return null;

    let minC = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (minC > arr[i]) {
            minC = arr[i];
        }
    }

    return minC;
}

```


### How it Works for

Let's walk through the max function step-by-step using the example array [5, 4, 8, 2]:


1. Check for empty array: First, the function checks if the array is empty (arr.length === 0). If it is, the function immediately returns null.



2. Initialize maximum: We assume the first element of the array (arr[0]) is the largest and store it in a variable called maxC. In our example, maxC = 5.



3. Loop through remaining elements: The function then iterates through the rest of the array starting from index 1 (i = 1).

            - i = 1: Compare maxC (5) with arr[1] (4). Since 5 is not less than 4, maxC stays 5.



             - i = 2: Compare maxC (5) with arr[2] (8). Since 5 is less than 8, we update maxC to 8.



             - i = 3: Compare maxC (8) with arr[3] (2). Since 8 is not less than 2, maxC stays 8.



4. Return result: After the loop completes, the function returns maxC, which is 8.

In simple terms: We start with the first number, then check each subsequent number. Whenever we find a number larger than our current maximum, we update our maximum to that number.



### How it Works for

The min function follows the same logical structure as max, but looks for the smallest value instead. Using the same array [5, 4, 8, 2]:


1. Check for empty array: Returns null if the array is empty.



2. Initialize minimum: Assume the first element is the smallest: minC = 5.



3. Loop through remaining elements:


    - i = 1: Compare minC (5) with arr[1] (4). Since 5 is greater than 4, we update minC to 4.



    - i = 2: Compare minC (4) with arr[2] (8). Since 4 is not greater than 8, minC stays 4.



    - i = 3: Compare minC (4) with arr[3] (2). Since 4 is greater than 2, we update minC to 2.



4. Return result: The function returns minC, which is 2.

In simple terms: We start with the first number, then check each subsequent number. Whenever we find a number smaller than our current minimum, we update our minimum to that number.



### Example Outputs

Let's see the output of our functions with various 
test cases:

```
// Example 1
console.log(max([5, 4, 8, 2])); // Output: 8
console.log(min([5, 4, 8, 2])); // Output: 2

// Example 2
console.log(max([-3, -10, -1, -7])); // Output: -1
console.log(min([-3, -10, -1, -7])); // Output: -10

// Example 3
console.log(max([42])); // Output: 42
console.log(min([42])); // Output: 42

// Example 4
console.log(max([])); // Output: null
console.log(min([])); // Output: null

```

### Time Complexity

The time complexity of both max and min functions is O(n), where n is the number of elements in the array.

This is because each function iterates through the array exactly once in a single loop. In the worst case, we need to check every element in the array to be certain we've found the correct minimum or maximum value.

Mathematically, if checking one element takes constant time c, then for n elements, the total time is proportional to n:
[ T(n) = c \cdot n ] This linear relationship gives us O(n) complexity.



### Space Complexity

The space complexity of both functions is O(1), which means they use constant space.

Both functions only use a fixed amount of additional memory:

- A few variables (maxC or minC, loop counter i)



- These don't scale with the size of the input array

No matter how large the input array grows, the functions always use the same small amount of extra space.



### Full Code

Here is the complete implementation of both functions with example usage:

```
function max(arr) {
    if (arr.length === 0) return null;

    let maxC = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (maxC < arr[i]) {
            maxC = arr[i];
        }
    }

    return maxC;
}

console.log(max([5, 4, 8, 2]));

function min(arr) {
    if (arr.length === 0) return null;

    let minC = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (minC > arr[i]) {
            minC = arr[i];
        }
    }

    return minC;
}

console.log(min([5, 4, 8, 2]));

```

This complete code can be copied directly into a JavaScript environment (like a browser console or Node.js) and will work immediately. The functions handle edge cases like empty arrays and work efficiently for arrays of any size.