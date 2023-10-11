const DECK = [
    {points: 1, image: 'https://images.thedirect.com/media/photos/witchn.jpg'}, 
    {points: 2, image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/June/130606/6C7757975-130606-ent-cersei-hmed.jpg'}, 
    {points: 3, image: 'https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ciri-icon-the-witcher-3-wild-hunt-wiki-guide-min.png'}, 
    {points: 4, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg'}, 
    {points: 5, image: 'https://www.iment.com/maida/tv/lordoftherings/galadriel-small.jpg'}, 
    {points: 6, image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png'}, 
    {points: 7, image: 'https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg'}, 
    {points: 8, image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/01/21/16427582365856.jpg'}, 
    {points: 9, image: 'https://pbs.twimg.com/profile_images/1424853927279927296/gu2WvJOu_400x400.jpg'}, 
    {points: 10, image: 'https://i.ytimg.com/vi/73lrlQ-8ORI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBxzgQXLgvq2IJlvaGBM-2og-OrcQ'}, 
    {points: 10, image: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/The-Last-of-Us-TV-Show-Joel-Death.jpg'},]

// playerHandEl = document.querySelectorAll('div.playercards > div')

let playerHand;

const playerCardContainerEl = document.querySelector('.playercards')

function getRandomNumber () {
    return Math.floor(Math.random() * DECK.length)
    
}

playerCardContainerEl.addEventListener('click', playCard)

function playCard (evt) {

    console.log(evt.target)
}

function getDeckCard () {
    return DECK[getRandomNumber()]
}

function setPlayerHand () {
    playerHand = [getDeckCard(), getDeckCard(), getDeckCard()]
    createCardEls(playerHand)
    //console.log(playerHand)    
}

function createCardEls (arr) {
    arr.forEach(function (card) {
        const cardEl = document.createElement('div')
        cardEl.innerText = card.points
        const cardImage = document.createElement('img')
        cardImage.src = card.image


        playerCardContainerEl.appendChild(cardEl)
        playerCardContainerEl.appendChild(cardImage)
        console.log(cardImage)
    })
}





// playerHandEl.forEach((element, idx) => {


// console.log(element)
// })






init()

function init(){
    setPlayerHand()
    render()
}

function render() {

}

