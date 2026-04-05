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

async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch(true){
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;    
    }

    return result;   
}

async function logRollResult(characterName, block,diceResult, attriute) {
    console.log(`${characterName}🎲 rolou um dado de ${block} ${diceResult} + ${attriute} = ${diceResult + attriute}` )
}

async function playRaceEngine(character1,character2) {
    
    for (let round = 1; round <= 5;round++){
        console.log(`🏁 Rodada${round}`)
        

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === 'RETA'){
            totalTestSkill1 = diceResult1 + character1.Velociade;
            totalTestSkill2 = diceResult2 + character2.Velociade;
            
            await logRollResult(character1.Nome,"velocidade",diceResult1,character1.Velociade)
            await logRollResult(character2.Nome,"velocidade",diceResult2,character2.Velociade)
            
    }
        if(block === 'CURVA'){
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

            await logRollResult(character1.Nome,"manobrabilidade",diceResult1,character1.Manobrabilidade)
            await logRollResult(character2.Nome,"manobrabilidade",diceResult2,character2.Manobrabilidade)
        }
        if(block === 'CONFRONTO'){
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;

            console.log(`${character1.Nome} confrontou com ${character2.Nome}`);

            await logRollResult(character1.Nome,"poder",diceResult1,character1.Poder);
            await logRollResult(character2.Nome,"poder",diceResult2,character2.Poder);

           
            if(powerResult1 > powerResult2 && character2.Pontos > 0 ? 1 : 0){
                 console.log(`${character1.Nome} marcou um ponto! E ${character2.Nome} perdeu um ponto! 🐢🐢`);
                 character2.Pontos--;
            }
            
           if(powerResult2 > powerResult1 && character1.Pontos > 0 ? 1 : 0){
             console.log(`${character2.Nome} marcou um ponto! E ${character1.Nome} perdeu um ponto! 🐢🐢`);
             character1.Pontos--;
           }
             
            console.log(powerResult2 === powerResult1 ? "confronto empatado " : "");

        }

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.Nome} marcou um ponto!`);
            character1.Pontos++;
        }else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.Nome} marcou um ponto!`);
            character2.Pontos++;
        }

        console.log("_________________________________")

    }
    
};

    async function declareWinner(character1, character2){
        console.log("Resultado final:");
        console.log(`${character1.Nome}: ${character1.Pontos}`);
        console.log(`${character2.Nome}: ${character2.Pontos}`);

        if(character1.Pontos >character2.Pontos){
            console.log(`\n ${character1.Nome} venceu a corrida! parabéns 🏆`)
        }else if(character2.Pontos >character1.Pontos){
            console.log(`\n ${character2.Nome} venceu a corrida! parabéns 🏆`)
        }else{
            console.log("A corrida terminou em empante! 🏁🤞")
        }
    }
(async function main() {
    console.log(
        `🚨🏁 Corrida entre ${player1.Nome} e ${player6.Nome} começando...\n`
    )

    await playRaceEngine(player1,player2);

    await declareWinner(player1, player2)
    
})();