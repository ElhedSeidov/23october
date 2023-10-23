const objWithRes = {
    n: 13,
    info: "n is smaller than 20"
    };

    
const copy = Object.assign({}, objWithRes);

if( copy.n>10)
{
    copy.info="n is bigger than 10"
}
console.log(objWithRes);
console.log(copy);