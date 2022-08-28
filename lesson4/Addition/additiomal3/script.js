// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
//     array[j] = i;
// }
// console.log(array);



// b. заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 50; i++) {
//     let number = Math.floor(Math.random() * 100);
//     if (number%2 === 0) {
//         number++;
//     }
//     array[i] = number;
// }
// console.log(array);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * 46);
// }
// console.log(array);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array = [];
// for (i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random()* 32)+8;
// }
// console.log(array);


// 2. Вивести за допомогою console.log кожен третій елемен
// let array = [12, 32, 85, -98, 854, 254, -75, 458, 632, 87, 20, 36];
// for (i = 2; i < array.length; i += 3) {
//     console.log(array[i]);
// }
// console.log(array);


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array = [12, 32, 85, -98, 854, 254, -75, 458, 632, 87, 20, 36];
// for (i = 2; i < array.length; i += 3) {
//     if (array[i]%2 === 0) {
//         console.log(array[i]);
//     }
// }
// console.log(array);



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив
// let array1 =[];
// let array = [12, 32, 85, -98, 854, 254, -75, 458, 632, 87, 20, 36, 56, 964, 3258, 32];
// for (i = 2; i < array.length; i += 3) {
//     if (array[i]%2 === 0) {
//         console.log(array[i]);
//         array1.push(array[i]);
//     }
// }
// console.log(array);
// console.log(array1);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//         console.log(array[i - 1]);
//     }
// }



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
// let rezalt = 0;
// let array = [100,250,50,168,120,345,188];
// for (i = 0; i < array.length; i++) {
//     rezalt = rezalt + array[i];
// }
//  rezalt = rezalt/array.length;
// console.log(rezalt);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let altArray = [];
// let array = [];
// for (i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * 50);
//     altArray[i] = array[i] * 5;
// }
// console.log(array);
// console.log(altArray);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
 let array2 = [];
 let array = [true, 56, false,124125,215,6346,{},'gr'];
for (const arrayElement of array) {
    if (typeof arrayElement === "number") {
        array2.push(arrayElement);
    }
}
 console.log(array);
 console.log(array2);


//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    let newar = {};
    for (let j = 0; j < citiesWithId.length; j++) {
        if (citiesWithId[j]["user_id"] === usersWithId[i]["id"]) {
            newar = JSON.parse(JSON.stringify(usersWithId[i]));
            newar.address = JSON.parse(JSON.stringify(citiesWithId[j]));
        }
    }
   usersWithCities[i] = newar;
}
console.log(usersWithCities);
console.log(usersWithId);


//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array =[1,2,3,4,5,6,7,8,9,10];
// for (i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//         console.log(array[i]);
//     }
// }



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let newarray =[];
// let array =[12, 23, 65, 98, -98, -75, 32, 158, 951, 357];
// for (i = 0; i < array.length; i++) {
//     newarray[i] = array[i];
// }
// console.log(newarray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let slowo = '';
// let arr = [ 'a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//     slowo +=arr[i];
// }
// console.log(slowo);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let slowo = '';
// let arr = [ 'a', 'b', 'c'];
// let i = 0;
// while (i < arr.length) {
//     slowo +=arr[i];
//     i++;
// }
// console.log(slowo);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let slowo="";
let arr = [ 'a', 'b', 'c'];
for (let element of arr) {
    slowo = slowo + element;
}
console.log(slowo);


let b=[1,2,3];

let k=0;
while(k<b.length){
    console.log(b);
    k++;
}