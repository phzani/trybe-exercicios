//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”.
let palavra = 'banana';
let invertida = '';
for(let index = 0; index < palavra.length; index +=1){
   invertida += palavra[palavra.length -1 -index];
}
console.log('palavra invertida: ' + invertida);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0];
let menorPalavra = array [0];
for(let index =0; index < array.length; index +=1){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}
    for(let index =0; index < array.length; index +=1){ 
     if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);