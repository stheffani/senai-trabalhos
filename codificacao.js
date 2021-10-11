let salaDeAula = ["Maria", "José"]; 
for(let contador = 0; contador <= salaDeAula.length; contador++){ 
    if(contador == 0){ 
        console.log("O número é: " + contador + " isso mesmo, é ZERO!"); 
    } else if(contador % 2 == 0) {
        console.log("O número é: " + contador + " e é PAR!"); 
    } else if(contador % 2 == 1) { 
        console.log("O número é: " + contador + " e é ÍMPAR!"); 
    }
}

//possibilidade 1
// let alunos = 5;
// let resultado = 0;
// resultado = alunos % 2;
// if(resultado  == 0){
//     console.log("par, "+ resultado)
// }
// if(resultado == 1){
//     console.log("ímpar, "+ resultado)
// }
// if(alunos == 0){
//     console.log("zero")
// } 

//possibilidade 3
// let listaNomes = ["Maria","José","Joaquim","Daniel","Rosa","Julia","João","Ana"];
// console.log(listaNomes.length);
// for(let contador = 0; contador < listaNomes.length; contador++){
//     if(listaNomes.length){
//         console.log("Lista Vazia, Zero" + listaNomes[contador].length);
//     } else if (listaNomes.length % 2 == 1) {
//         console.log("ÍMPAR -> O nome da pessoa é: " + listaNomes[contador]);
//     } else if (listaNomes.length % 2 == 0) {
//         console.log("PAR -> O nome da pessoa é: " + listaNomes[contador]);
//     }       
// }

//possibilidade 2
// let salaDeAula = [];
// if(salaDeAula.length == 0){
//     console.log("Zero " + salaDeAula.length);
// } else if(salaDeAula.length % 2 == 0){
//     console.log("Par " + salaDeAula.length);
// } else if(salaDeAula.length % 2 == 1){
//     console.log("Ímpar " + salaDeAula.length);
// }


