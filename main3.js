const objWithSum = {
    a: 10,
    b: 10
    };


    
const copy = Object.assign({}, objWithSum);

copy.sum=copy.a+copy.b

console.log(objWithSum)
console.log(copy)