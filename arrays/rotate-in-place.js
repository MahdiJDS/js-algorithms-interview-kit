//_______rotate in-place

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7], 0, 6)) // Array(7) [ 7, 6, 5, 4, 3, 2, 1 ]


function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // Array(7) [ 5, 6, 7, 1, 2, 3, 4 ]