# README Merge Algorithm

## Merge Algorithm
---
#### Overview

This function merges two already sorted arrays into one sorted array.

Function Name

marge(arr1, arr2)



> The name looks like a misspelling of merge. The logic is a standard merge algorithm.

### How It Works

- i is the index for the first array.

- j is the index for the second array.

- result stores the merged output.

The function compares the current elements of both arrays:

If arr1[i] is smaller, it adds that value to result and increments i.

Otherwise, it adds arr2[j] to result and increments j.

When one array is exhausted, the remaining items from the other array are appended to result.

### Example
```
console.log(marge([1, 3, 5], [2, 4, 6, 8]));
// Output: [1, 2, 3, 4, 5, 6, 8]
```

Step-by-Step Example

```
For arr1 = [1, 3, 5] and arr2 = [2, 4, 6, 8]:
```

StepComparison (arr1[i] vs arr2[j])ActionResult Array (so far)ij11 < 2Take 1[1]1023 > 2Take 2[1, 2]1133 < 4Take 3[1, 2, 3]2145 > 4Take 4[1, 2, 3, 4]2255 < 6Take 5[1, 2, 3, 4, 5]326arr1 finishedAppend rest of arr2[1, 2, 3, 4, 5, 6, 8]34

Final result: [1, 2, 3, 4, 5, 6, 8]

### Time Complexity

O(n + m)

( n ) is the length of arr1

( m ) is the length of arr2

Each element from both input arrays is visited exactly once. Formally, the time complexity is:
[ T(n, m) = O(n + m) ]

### Space Complexity

O(n + m)

A new auxiliary array (result) is created to store the merged elements. Its size is equal to the sum of the sizes of the input arrays. Therefore:
[ S(n, m) = O(n + m) ]

### Full Code
```
function marge(arr1, arr2) {
    let i = 0; // Index for arr1
    let j = 0; // Index for arr2
    let result = []; // Merged result array

    // Compare elements from both arrays while both indices are in bounds
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Append any remaining elements from either array
    // (only one of these slices will have content)
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Example usage
console.log(marge([1, 3, 5], [2, 4, 6, 8])); // [1, 2, 3, 4, 5, 6, 8]
```

### Key Characteristics

Requires Pre-sorted Input: Both input arrays must already be sorted in ascending order for the algorithm to work correctly.

Stable Merge: If the two input arrays have equal elements, the algorithm prioritizes the element from the first array (arr1) due to the condition if (arr1[i] < arr2[j]). This makes it stable for this specific implementation when merging arrays of primitives.

Efficiency: The algorithm operates in linear time relative to the total number of elements, making it optimal for the merging task.

### Common Use Cases

- A fundamental subroutine in the Merge Sort algorithm.

- Merging sorted data streams (e.g., log files sorted by timestamp).

- Combining results from sorted database queries.

### Summary

This is a simple, efficient, and classic algorithm for combining two sorted sequences into a single sorted sequence. Its linear time complexity ( O(n + m) ) makes it the optimal choice for this operation.