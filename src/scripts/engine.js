const state = {
    score:{
        playerScore: 0,
        computerScore:0,
        scoreBox: document.getElementById("score_points")
    },
    
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },

    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    actions: {
        button: document.getElementById("next-duel")
    },
}

const pathImages = ".src/assets/icons/"

const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}"dragon.png"`,
        WinOf: "Rock",
        LoseOF: "Scissors",
    },
    {
        id:1,
        name: "Exodia",
        type: "Rock",
        img: `${pathImages}"exodia.png"`,
        WinOf: "Scissors",
        LoseOF: "Paper",
    },
    {
        id:2,
        name: "Blue Eyes White Dragon",
        type: "Scissors",
        img: `${pathImages}"dragon.png"`,
        WinOf: "Scissors",
        LoseOF: "",
    },
]

function init() {

}

init()