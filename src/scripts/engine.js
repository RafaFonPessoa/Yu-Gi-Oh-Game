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

const playerSides = {
    player: "player-cards",
    computer: "computer-cards", 
}

const pathImages = "src/assets/icons/"

const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: "Rock",
        LoseOF: "Scissors",
    },
    {
        id:1,
        name: "Exodia",
        type: "Rock",
        img: `${pathImages}exodia.png`,
        WinOf: "Scissors",
        LoseOF: "Paper",
    },
    {
        id:2,
        name: "Dark Magician",
        type: "Scissors",
        img: `${pathImages}magician.png`,
        WinOf: "Paper",
        LoseOF: "Rock",
    },
]

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img")
    cardImage.setAttribute("height", "100px")
    cardImage.setAttribute("src", "src/assets/icons/card-back.png")
    cardImage.setAttribute("data-id", IdCard)
    cardImage.classList.add("card")

    if(fieldSide === playerSides.player)
    {
        cardImage.addEventListener("click", () => {
            setCardField(cardImage.getAttribute("data-id"))
        })


        cardImage.addEventListener("mouseover", () => {
            drawSelectedCard(IdCard)
        })

    }
    return cardImage
}  

async function setCardField(cardId) {
    await removeAllCardsImages()

    let computerCardId = await getRandomCardId()

    state.fieldCards.player.style.display = "block"
    state.fieldCards.computer.style.display = "block"

    state.fieldCards.player.src = cardData[cardId].img
    state.fieldCards.computer.src = cardData[computerCardId].img

    let duelResults = await checkDuelResults(cardId, computerCardId)

    await updateScore()
    await drawButton(duelResults)
}

async function drawSelectedCard(index){
    state.cardSprites.avatar.src = cardData[index].img
    state.cardSprites.name.innerText = cardData[index].name
    state.cardSprites.type.innerText = "Attribute: "+ cardData[index].type
}

async function drawCards(cardNumbers, fieldSide) {
    for(let i = 0; i < cardNumbers; i++)
    {
        const randomIdCard = await getRandomCardId()
        const cardImage = await createCardImage(randomIdCard, fieldSide)
    
        document.getElementById(fieldSide).appendChild(cardImage)
    }
}

function init() {
    drawCards(5, playerSides.player)
    drawCards(5, playerSides.computer)
}

init()