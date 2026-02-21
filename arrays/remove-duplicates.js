//________delete repite


// 1

function repite(arr) {
    const deleteR = arr.filter((item, index) => arr.indexOf(item) == index);
    return deleteR;
}
console.log(repite([1, 2, 2, 1, 5]))