// forEach só esta disponiveis dentro de arrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for normal
for(let valor of a1){       
    console.log(valor);
}

console.log(' ');

// forEach
a1.forEach(function(va, ind, array){
    console.log(va, ind);
})