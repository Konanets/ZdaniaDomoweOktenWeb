let words = ['hello world', 'lorem ipsum', 'javascript is cool'];

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
words.forEach(str => console.log(str.length))


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upperWords = words.map(str => {
    console.log(str.toUpperCase())
    return str.toUpperCase()
})

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
upperWords.forEach(str => console.log(str.toLowerCase()))

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
clear = dirty.trim();
console.log(clear);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.


let str = 'Ревуть воли як ясла повні';

const stringToarray = str => str.split(' ');

let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
numbers = numbers.map(num => num.toString())
console.log(numbers);


// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (numbers, type) => {
    if (type === 'ascending') numbers.sort((number1, number2) => number1 - number2);
    else if (type === 'descending') numbers.sort((number1, number2) => number2 - number1);
    return numbers;
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration)
console.log(coursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.filter((item) => item.monthDuration > 5)
console.log(coursesAndDurationArray);


//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deckOfCards = [
    //diamond
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red',
    },
    //heart
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red',
    },
    //clubs
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black',
    },
    // spade
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black',
    },

    // Джокери
    {
        cardSuit: '-',
        value: 'joker',
        color: 'black',
    },
    {
        cardSuit: '-',
        value: 'joker',
        color: 'red',
    },
]
// - знайти піковий туз
console.log(deckOfCards.find((item) => item.cardSuit === 'spade' && item.value === 'ace'));
// - всі шістки
console.log(deckOfCards.filter((item) => item.value === '6'));

// - всі червоні карти

console.log(deckOfCards.filter((item) => item.color === 'red'));
// - всі буби
console.log(deckOfCards.filter(item => item.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(deckOfCards.filter(item => item.cardSuit === 'clubs' && !(item.value < 9)));


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let box = deckOfCards.reduce((cardsBlock, card) => {
    if (card.cardSuit === 'spade') cardsBlock.spades.push(card)
    else if (card.cardSuit === 'diamond') cardsBlock.diamonds.push(card)
    else if (card.cardSuit === 'heart') cardsBlock.hearts.push(card)
    else if (card.cardSuit === 'clubs') cardsBlock.clubs.push(card)
    else cardsBlock.other.push(card)
    return cardsBlock;
}, {spades: [], diamonds: [], hearts: [], clubs: [], other: []})

console.log(box);






