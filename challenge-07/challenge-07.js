/*
Crie um array com 5 items (tipos variados).
*/
var myArrayVariado = ['Eu estou indo bem', false, 55, function soma(x, y) {return x + y}, [2, 6, 'aqui vai qualquer valor']];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    myArrayVariado.push(item);
    return console.log(myArrayVariado);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([5, true, 36, 40, 60, 121, true]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + myArrayVariado[5][1] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + myArrayVariado.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + myArrayVariado[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Os numeros pares entre 10 e 20 são:');
var num = 10;
while(num <= 20) {
    num % 2 == 0 ? console.log(num) : '';
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Os numeros impares entre 10 e 20 são:');
var numImpar = 10;
while(numImpar <= 20) {
    numImpar % 2 !== 0 ? console.log(numImpar) : '';
    numImpar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Os numeros pares entre 100 e 120 são:');
for (var i = 100; i <= 120; i++ ) {
    i % 2 === 0 ? console.log(i) : '';
}

console.log('Os numeros impares entre 111 e 125 são:');
for (var j = 111; j <= 125; j++ ) {
    j % 2 !== 0 ? console.log(j) : '';
}