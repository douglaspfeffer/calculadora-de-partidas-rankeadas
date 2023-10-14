let saldo=verificarSaldo(101,10) // Inserir número de vitórias seguido de derrotas

console.log("O Herói tem de saldo de", saldo,"está no nível de", nivel) // Mostra o resultado final desejado

function verificarSaldo(vitorias, derrotas){
    let quantidadeVitorias=vitorias // Variável criada para guardar o número de vitórias
    let saldoVitorias=vitorias-derrotas
    if(quantidadeVitorias<=10){
        nivel="Ferro"
    }else if(quantidadeVitorias>10&&quantidadeVitorias<=20){
        nivel="Bronze"
    }else if(quantidadeVitorias>20&&quantidadeVitorias<=50){
        nivel="Prata"
    }else if(quantidadeVitorias>50&&quantidadeVitorias<=80){
        nivel="Ouro"
    }else if(quantidadeVitorias>80&&quantidadeVitorias<=90){
        nivel="Diamante"
    }else if(quantidadeVitorias>90&&quantidadeVitorias<=100){
        nivel="Lendário"
    }else if(quantidadeVitorias>=101){
        nivel="Imortal"
    }
    return saldoVitorias
}