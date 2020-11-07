document.addEventListener('DOMContentLoaded', () => {

    // Card listing (only vowels in trial version)
    const cardArray = [
        {
            name: 'a',
            img: 'images/v0.png'
        },
        {
            name: 'a',
            img: 'images/v1.png'
        },
        {
            name: 'ya',
            img: 'images/v2.png'
        },
        {
            name: 'ya',
            img: 'images/v3.png'
        },
        {
            name: 'eo',
            img: 'images/v4.png'
        },
        {
            name: 'eo',
            img: 'images/v5.png'
        },
        {
            name: 'yeo',
            img: 'images/v6.png'
        },
        {
            name: 'yeo',
            img: 'images/v7.png'
        },
        {
            name: 'o',
            img: 'images/v8.png'
        },
        {
            name: 'o',
            img: 'images/v9.png'
        },
        {
            name: 'yo',
            img: 'images/v10.png'
        },
        {
            name: 'yo',
            img: 'images/v11.png'
        },
        {
            name: 'u',
            img: 'images/v12.png'
        },
        {
            name: 'u',
            img: 'images/v13.png'
        },
        {
            name: 'yu',
            img: 'images/v14.png'
        },
        {
            name: 'yu',
            img: 'images/v15.png'
        },
        {
            name: 'eu',
            img: 'images/v16.png'
        },
        {
            name: 'eu',
            img: 'images/v17.png'
        },
        {
            name: 'i',
            img: 'images/v18.png'
        },
        {
            name: 'i',
            img: 'images/v19.png'
        }
    ]


    // Randomize the cards
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var firstPick = []
    var secondPick = []
    const correctPick = []

    // Build-a-board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/t1.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Match Checking
    function goodMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = secondPick[0]
        const optionTwoId = secondPick[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/t1.png')
            cards[optionTwoId].setAttribute('src', 'images/t1.png')
        }
        else if (firstPick[0] === firstPick[1]) {
            alert('Match found!')
            cards[optionOneId].setAttribute('src', 'images/t2.png')
            cards[optionTwoId].setAttribute('src', 'images/t2.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            correctPick.push(firstPick)
        } else {
            cards[optionOneId].setAttribute('src', 'images/t1.png')
            cards[optionTwoId].setAttribute('src', 'images/t1.png')
            alert('No match, look again!')
        }
        firstPick = []
        secondPick = []
        resultDisplay.textContent = correctPick.length
        if (correctPick.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats! You did it! Refresh to play again.'            
        }
    }

    // Card Flipping
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        firstPick.push(cardArray[cardId].name)
        secondPick.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (firstPick.length === 2) {
            setTimeout(goodMatch, 500)
        }
    }

    // Make the board
    createBoard()
})