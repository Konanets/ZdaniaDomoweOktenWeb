// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n){
    let arrResult = [];
    for(let i = 0 ; i < str.length; i += n) {
        arrResult.push(str.substr(i, n));
    }
    return  arrResult;
}

console.log(cutString('I believe in what is not, was not and cannot be', 5));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // охотник

function delete_characters(str, length){
    return str.split(' ').find(word=>word.length===length);
}
document.writeln(delete_characters('Каждый охотник желает знать', 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

function insert_dash(str){
    return str.toUpperCase().split(' ').join('-')
}
    let str = "HTML JavaScript PHP";
console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


function capitalizeFirstLetterOne(str){
    return str[0].toUpperCase().concat(str.slice(1))
}
console.log(capitalizeFirstLetterOne('history'));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function normalizeStr(str){
    let name = ''
    for (let letter of str) {
        if (letter.toLowerCase() !== letter.toUpperCase()) {
            name += letter;
        } else {
            if (name[name.length - 1] !== ' ') {
                name += ' ';
            }
        }
    }
    return name;
}
console.log(normalizeStr('Harry..Potter'));
console.log(normalizeStr('Ron---Whisley'));
console.log(normalizeStr('Hermione__Granger'));

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
    function random(){
        let array=[];
        for (let i = 100; i!==0 ; i--) {
            array.push(Math.floor(Math.random()*100))
        }
        return array;
    }
console.log(random())
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(random().sort((num1, num2) => num1 - num2));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(random().filter((num1) => num1>0&&num1%2===0));





// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalizeAllFirstLetter(str){

    return (str.split(' ').map(item => item[0].toUpperCase().concat(item.slice(1)))).join(' ')
}
console.log(capitalizeAllFirstLetter('some day'));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let validator = (email)=>{

    //Варіант з регулярками (Це просто красиво)
     //const email_reg=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
     //return email_reg.test(email)?'Good Address':'Wrong Address'

    //Варіант 1
    // let valid = email.trim().toLowerCase();
    // if (valid[0]=== '@' || valid[valid.length-1] === '@') {
    //     console.log('Wrong Address');
    // }else if ( valid.split('@').length === 2){
    //     console.log('Wrong Address');
    // }else if ((email.indexOf('.') - email.indexOf('@')) < 3) {
    //     console.log('Wrong Address');
    //
    // }else{
    //     console.log('Good Address');
    // }

    //Варіант 2
    let splited=email.split('@');
    if(email.includes('@')&&splited.length===2&&splited[0].length>0&&splited[1].length>0&&!(splited[1][0].includes('.')||splited[1][1].includes('.'))) {
        console.log('Valid')
    }
    else console.log('Ne valid')
}
validator('someemail@gmail.com')


//
// - є масивlet
coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortCourse = coursesArray.sort((subject1, subject2) => subject2.modules.length - subject1.modules.length);
console.log(sortCourse);

//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch) => {
    let countSymbol = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch){
            countSymbol += 1;
        }
    }
    return countSymbol;
}
console.log(count('Астрономия это наука о небесных объектах', 'о'));


//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString2 = (str, n) =>{
    let splited=str.split(' ');
    let b=str.split(' ').slice(0,n-splited.length).join(' ')
    console.log(b)

}
cutString2('Сила тяжести приложена к центру масс тела', 5);// 'Сила тяжести приложена к центру'


//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books=[
    {name: 'The Alchemist',pages:250,authors:['Paulo Coelho'],genres:['live']},
    {name: 'The Auctioneer',pages:450,authors:['Joan Samson'],genres:['horror']},
    {name: 'War and peace',pages:1550,authors:['Tolstoj','jakubowicz'],genres:['War','Peace']},
]
//[ -знайти наібльшу книжку.

Array.prototype.find(()=>{
    let max=books[0]
    books.find((item)=>max=item.pages>max.pages?item:max)
    console.log(max)
    return 0;
})
books.find();
let max=books[0]
books.find((item)=>max=item.pages>max.pages?item:max)
console.log(max)
console.log(books)


// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор] це ми робили у lesson4 додаткові

// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((book1, book2) => book1.pages.length - book2.pages.length));