let salario = 1550;
let inss= 0;
let ir = 0;
let somaSalario;
let somaSalario2;
let salarioLiquido;

//INSS

if (salario <= 1556.94) {
inss = salario * 0.08;
somaSalario = salario - inss;
} else if (salario >= 1556.95 && salario <= 2594.92) {
inss = salario * 0.09;
somaSalario = salario - inss;
} else if (salario >=2594.93 && salario <= 5189.82) {
    inss = salario * 0.11;
    somaSalario = salario - inss;
} else if (salario > 5189.82) {
    inss = 570.88;
    somaSalario = salario - inss;
}
 
//IR

 if (somaSalario <= 1903.98) {
    ir = 0;
 } else if (somaSalario  >= 1903.99 && somaSalario <= 2826.65){
    ir = somaSalario * 0.075 - 142.80;
 } else if (somaSalario  >= 2826.66 && somaSalario <= 3751.05) {
    ir = somaSalario * 0.15 - 354.80;
 } else if (somaSalario  >= 3751.06 && somaSalario <= 4664.68) {
    ir = somaSalario * 0.225 - 636.13;
 } else if (somaSalario  > 4664.68) {
    ir = somaSalario * 0.275 - 869.36;
 }
 salarioLiquido = salario - inss - ir;
 console.log('Seu salário é: ' + salario + '. Valor INSS: ' + inss + '. Valor IR: ' + ir + '. Salário líquido: ' + salarioLiquido);