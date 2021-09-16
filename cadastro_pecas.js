//stheffani emboava
//peça tem que ter o peso >100g
//lista de peças >10 = mensagem capacidade insuficiente
//nome da peça <3 caracteres, mensagem de erro

let peso = 0; //120; 50;
let letras = ""; //tesoura; pá;
let listaPecas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; [1, 2, 3];

//if - calculo do peso
if (peso > 100){
    //if - qntd de peças
    if (listaPecas.length <=10){
        //if - qntd de letras
        if(letras.length >3 ){
            console.log("Peça cadastrada com sucesso!")
        //fim do if qntd de letras
        }else{
            console.log("Impossível cadastrar - nome da peça com menos de 3 letras")
        }
    //fim do if qntd de peças
    }else{
        console.log("Impossível cadastrar - limite de peças excedido")
    }
//fim do if peso
}else{
    console.log("Impossível cadastrar - peso inferior a 100g")
}
