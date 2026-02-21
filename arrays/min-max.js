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