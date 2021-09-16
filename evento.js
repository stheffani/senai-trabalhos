//data posterior - permitir
//maior de 18 anos - permitir
//participantes e palestrantes
//participantes inferior a 100 - permitir

let evento = [25, 12, 2021];
let dataHoje = [15, 09, 2021];
let idade = 18;

//ano
if((evento[2] - dataHoje[2]) < 0){
    console.log("Impossível marcar, pois o ANO de hoje é posterior ao evento!!!");
} else if ((evento[1] - dataHoje[1]) < 0){
    //mês
    console.log("Impossível marcar, pois o MÊS de hoje é posterior ao evento!!");
} else if (((evento[0] - dataHoje[0]) < 0) && ((evento[1] - dataHoje[1]) == 0)){
    //dia
    console.log("Impossível marcar, pois o DIA de hoje é posterior ao evento!");
} else {
    if(idade < 18){
        //idade
        console.log("Impossível marcar, pois a idade é inferior a 18 anos.");
    } else {
        console.log("Marcado com Sucesso!!");
    }        
}