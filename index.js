const player1 ={
    Nome: "Mario",
    Velociade: 4,
    Manobrabilidade:3,
    Poder:3,
    Pontos: 0
};

const player2 ={
    Nome: "Bowser",
    Velociade: 5,
    Manobrabilidade:2,
    Poder:5,
    Pontos: 0
};

const player3 ={
    Nome: "Peach",
    Velociade: 3,
    Manobrabilidade:4,
    Poder:2,
    Pontos: 0
};

const player4 ={
    Nome: "Luigi",
    Velociade: 3,
    Manobrabilidade:4,
    Poder:4,
    Pontos: 0
};

const player5 ={
    Nome: "Yoshi",
    Velociade: 2,
    Manobrabilidade:4,
    Poder:3,
    Pontos: 0
};

const player6 ={
    Nome: "Donkey kong",
    Velociade: 2,
    Manobrabilidade:2,
    Poder:5,
    Pontos: 0
};


async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}
async function playRaceEngine(character1,character2) {

    for (let round = 1; round <= 5;round++){
        console.log(`🏁 Rodada${round}`)
        
    }
};


(async function main() {
    console.log(
        `🚨🏁 Corrida entre ${player1.Nome} e ${player6.Nome} começando...\n`
    )

    await playRaceEngine(player1,player2);
    
})();