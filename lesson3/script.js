// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
// 1, 0, -3

let x = 2;
if (x !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;
if (time >= 0 && time <= 15) {
    console.log('1 quater');
} else if (time > 15 && time <= 30) {
    console.log('2 quater');
} else if (time > 30 && time <= 45) {
    console.log('3 quater');
} else if (time > 45 && time < 60) {
    console.log('4 quater');
} else {
    console.log('Error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = -5;
if (day > 0 && day <= 10) {
    console.log('1 quater');
} else if (day > 10 && day <= 20) {
    console.log('2 quater');
} else if (day > 20 && day <= 31) {
    console.log('3 quater');
} else {
    console.log('Error');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day2 = +prompt('Enter number');
switch (day2) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('not day');

}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x2 = 5;
let y = 5;
if (x2 > y) {
    console.log(x2);
} else if (y > x2) {
    console.log(y);
} else {
    console.log('equal');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподыбне, тобто кастується до false)
let x3 = NaN || 'default';
console.log(x3);