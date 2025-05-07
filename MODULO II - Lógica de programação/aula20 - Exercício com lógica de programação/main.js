//Escreva uma função que receba 2 números e retorne o maior deles

function max(x, y) {
    if(x > y){
        return x;
    }else{
        return y
    }
}
console.log(max(12, 2));

//Outro jeito 2
function max1(x, y) {
    return x > y ? x : y;
}
console.log(max1(88, 100));

//Jetito 3
const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max2(5,3));

//Jeito 4
const max3 = (x, y) => x > y ? x : y;
console.log(max3(10, 5));