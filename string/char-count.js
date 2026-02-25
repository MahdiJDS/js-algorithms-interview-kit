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

console.log(count('program')) // { p: 1, r: 2, o: 1, g: 1, a: 1, m: 1 }


function maxch(obj) {
    if (Object.keys(obj).length === 0) return null;

    let maxC = 0;
    let maxh = '';

    for (let ch in obj) {
        if (maxC < obj[ch]) {
            maxC = obj[ch];
            maxh = ch;
        }
    }
    return { count: maxC, char: maxh };
}

console.log(maxch(count('program'))) // { count: 2, char: 'r' }