//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const n1 = Math.floor(Math.random()* 100) +1;
const n2 = Math.floor(Math.random()* 100) +1;
const n3 = Math.floor(Math.random()* 100) +1;

if (n1 %2 ===0 || n2%2===0 || n3%2===0){
    console.log(true);
    console.log(n1 ," - ", n2," - ",n3);
}