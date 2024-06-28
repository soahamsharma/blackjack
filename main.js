const deck = {
    _suits: ['H', 'S', 'C', 'D'],
    _ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K'],
    _cards: [],
    initialise(){
        this._cards = ['HA',  'H2',  'H3',  'H4', 'H5', 'H6', 'H7', 'H8',  'H9',  'H10', 'HQ', 'HJ', 'HK',
            'SA', 'S2',  'S3',  'S4',  'S5', 'S6', 'S7', 'S8', 'S9',  'S10', 'SQ',  'SJ', 'SK',
            'CA', 'C2', 'C3',  'C4',  'C5',  'C6', 'C7', 'C8', 'C9', 'C10', 'CQ',  'CJ',  'CK',
            'DA', 'D2', 'D3', 'D4',  'D5',  'D6',  'D7', 'D8', 'D9', 'D10', 'DQ',  'DJ',  'DK']
    },
    shuffle (){
        for (var i = this._cards.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [this._cards[i], this._cards[rand]] = [this._cards[rand], this._cards[i]]
        }
    },
    deal(n){
        pick = []
        if (n < this._cards.length){
            for(let i = 0; i<n; i++){
                pick.push(this._cards.pop())
            }
        } else {
            console.log(`The deck has only ${this._cards.length} cards left. Dealing ${this._cards.length} cards`)
            pick = this._cards
        }
        return pick
    },
};

deck.initialise()
deck.shuffle()
console.log(deck._cards)
console.log(deck.deal(8))
console.log(deck.deal(8))
console.log(deck.deal(8))
console.log(deck.deal(8))
console.log(deck.deal(8))
console.log(deck.deal(8))
console.log(deck.deal(8))

