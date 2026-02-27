//_____________Anagram

function anagram(str1, str2) {
    const check = str => {
        return str.split('').sort().join('');
    };

    return check(str1) === check(str2);
}

console.log(anagram("listen", "silent")); // true
