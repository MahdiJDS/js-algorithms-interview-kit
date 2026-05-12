//________min&max

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
console.log(max([5, 4, 8, 2])) // min 8


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
console.log(min([5, 4, 8, 2])) // 2