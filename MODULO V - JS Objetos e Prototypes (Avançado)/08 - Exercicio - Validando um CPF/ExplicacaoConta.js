// CPF1: 705.484.450-52    /   CPF2: 070.987.720-03

/*
Pegamos os 9 números do CPF e multiplicamos cada um dos dígitos por uma seqência regressiva (10, 9, 8, 7, 6, 5, 4, 3, 2)

PEGANDO O PRIMEIRO DIGITO DO CPF
CPF1:      7x  0x  5x  4x  8x  4x  4x  5x  0x
Regresão:  10  9   8   7   6   5   4   3   2
Resultado: 70  0   40  28  48  20  16  15  0
SOMA ( + ) do resultado: 237 
Depois pegamos o resto: 237 % 11 = 5        /   console.log(11 - (237 % 11));
5 é o primeiro dígito do CPF

OBS: O número não pode ser maior que 9, se for, consideramos que ele é " 0 ".


Pegando o segundo dígito do CPF
CPF1:      7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
Regresão:  11  10  9   8   7   6   5   4   3   2
Resultado: 77  0   45  32  56  24  20  20  0   10
SOMA ( + ) do resultado: 284
Depois pegamos o resto: 284 % 11 = 2       /     console.log(11 - (284 % 11));
2 é o segundo dígito do CPF

Depois realizamos a comparação, o CPF tem que ser String
705.484.450-52 === 705.484.450-52


*/
console.log(11 - (284 % 11));

let cpf = '705.484.450-52';

// A função replace() tira os pontos e o traço
let cpfLimpo = cpf.replace(/\D+/g, '');  // Com este código, tudo que não for um número será substituido por nada

// Colocando o CPF em um ARRAY
cpfArray = Array.from(cpfLimpo);

// Exibindo sem a ,
// reduce() tira as , e podemos transformar de String para numero e garantir/acrescentar um zero onde é o digito
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));


