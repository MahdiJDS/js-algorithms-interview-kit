//___________count&max

function count(str) {
    let strC = {};

    for (let ch of str) {
        if (strC[ch]) {
            strC[ch] += 1
        } else {
            strC[ch] = 1;
        }
        //strC = (strC[ch] || 0) + 1
    }
    return strC;
}

console.log(count('program'))


