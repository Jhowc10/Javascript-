//Com ARRAY

const frutas = ['Pera', 'Maçã', 'Uva'] // Quando é simples assim, é chamado também de Vetor, se for dois ai é Array

//for tradicional
for (let i = 0; i < frutas.length; i++) {  
    console.log(frutas[i]);           
}

//for in
for (let i in frutas){  //Lê o índice
    console.log(i);
}

for (let i in frutas){  //Lê o array
    console.log(frutas[i]);
}
