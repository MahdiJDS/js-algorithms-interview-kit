//______________object

const obj1 = {
    name: 'M'
}
const obj2 = {
    name: 'N'
}

const obj3 = {
    name: 'E'
}

obj1[obj2] = {
    name: "t1"
}
obj1[obj3] = {
    name: 't2'
}

console.log(obj1.toString()); //[object Object]
console.log(obj1[obj2]) // {name: 't2'}