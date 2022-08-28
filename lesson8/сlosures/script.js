function UserCard(key, balance = 100, transactionLimit = 100, historyLogs = []) {
    let addHistoryLogs = (operationType, credits) => {
        let time = new Date().toLocaleTimeString();
        let day = new Date().toLocaleDateString("en-US");
        historyLogs.push({
            operationType,
            credits,
            operationTime: `${time} ${day}`,
        })
    }
    return {
        getCardOptions: () => {
            return {
                ['key']: key,
                ['balance']: balance,
                ['transactionLimit']: transactionLimit,
                ['historyLogs']: historyLogs,
            }
        },
        putCredits(cash) {
            balance += cash;
            addHistoryLogs('Received credits', cash);
        },
        takeCredits: (cash) => {
            if (cash <= balance && cash <= transactionLimit) {
                balance -= cash;
                addHistoryLogs('Withdrawal of credits', cash);
            } else console.error('Перевищейний ліміт, або недостатньо коштів, Будьласка поповніть ваш рахунок :)');
        },
        setTransactionLimit: (newLimit) => {
            transactionLimit = newLimit;
            addHistoryLogs('Transaction limit change', newLimit);
        },
        transferCredits: (cash, anotherCard) => {
            if (cash * 1.05 <= balance && cash * 1.05 <= transactionLimit) {
                balance -= cash * 1.05;
                anotherCard.putCredits(cash);
                addHistoryLogs('Withdrawal of credits', cash);
            } else console.error('Перевищейний ліміт, або недостатньо коштів, Будьласка поповніть ваш рахунок :)');
        },
    }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let cardsLength = this.cards.length;
        if (cardsLength === 3) return console.error('Максимальна кількість карток');
        this.cards.push(UserCard(cardsLength + 1))
    }

    getCardByKey(cardKey) {
        if (cardKey > 2 || cardKey < 0) return console.error(`Ви ввели неправильний номер картки!`);
        return this.cards.find(card => card.getCardOptions().key === cardKey)
    }

}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
