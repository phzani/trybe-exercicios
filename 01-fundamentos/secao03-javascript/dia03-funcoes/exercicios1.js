let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
/*
for( let index =0; index < numbers.length; index += 1){
    //console.log(numbers[index]);
}
*/

//Some todos os valores contidos no array e imprima o resultado.
/* 
let soma = 0;
for( let index =0; index < numbers.length; index += 1){
    soma += numbers[index]
}
console.log(soma);
*/

//Calcule e imprima a média aritmética dos valores contidos no array.

/*
let soma = 0;
let media;
for( let index =0; index < numbers.length; index += 1){
    soma += numbers[index]
}
media = soma / numbers.length;
console.log(media);
*/

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
/*
let soma = 0;
let media;
for( let index =0; index < numbers.length; index += 1){
    soma += numbers[index]
}
media = soma / numbers.length;
if (media > 20) {
    console.log('Valor maior que 20');
} else {
console.log('Valor menor ou igual a 20');
}
*/

//Utilizando for, descubra o maior valor contido no array e imprima-o.
/*
let maiorNumero = numbers[0]
for(let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);
*/

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
/*
let numerosImpares = [];
let quantidadeImpares =0;
for (let index =0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        numerosImpares.push(numbers[index])
        quantidadeImpares +=1;
    } 
}
if(quantidadeImpares == 0) {
    console.log('Nenhum número par encontrado');
}
console.log(numerosImpares);
*/

//Utilizando for, descubra o menor valor contido no array e imprima-o.
/*
let menorNumero = numbers [0]
for(let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] < menorNumero) {
    menorNumero = numbers[index];
    }
}
console.log(menorNumero);
*/

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
/*

let numeros =[];
for(let index =1; index <= 25; index +=1){
    numeros.push(index)
}
console.log(numeros);

*/

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numeros =[];
let divisao = [];
for(let index =1; index <= 25; index +=1){
    numeros.push(index)
}
for(let index =0; index < numeros.length; index +=1){
 divisao.push(numeros[index] / 2)
}
console.log(numeros);
console.log(divisao);