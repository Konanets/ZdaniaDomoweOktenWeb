
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

let arrey = [2,17,13,6,22,31,45,66,100,-18];
console.log(arrey)
//
// let i = 0;
// while (i < arrey.length) {
//     console.log(arrey[i]);
//
//     i++
// }


//     2. перебрати його циклом for

// for (let i = 0; i < arrey.length; i++) {
//     console.log(arrey[i]);
// }






//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arrey.length) {
//     if (i%2 ===1) {
//         console.log(arrey[i]);
//     }
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

//
// for (let i = 0; i < arrey.length; i++) {
//     if (i%2 === 1) {
//         console.log(arrey[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

//
// let i = 0;
// while (i < arrey.length) {
//     if (arrey[i]%2 ===0) {
//         console.log(arrey[i]);
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

//
// for (let i = 0; i < arrey.length; i++) {
//     if (arrey[i]%2 === 0) {
//         console.log(arrey[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

//
// for (let i = 0; i < arrey.length; i++) {
//     if (arrey[i]%3 === 0) {
//         arrey[i] = "okten";
//         console.log(arrey[i]);
//     }
// }
// console.log(arrey);


// 8. вивести масив в зворотньому порядку.

//
// for (let i = arrey.length - 1; i >= 0; i--) {
//     console.log(arrey[i]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1::reverse
// let i = arrey.length - 1;
// while (i >= 0) {
//     console.log(arrey[i]);
//     i--
// }


// 2::reverse перебрати його циклом for
// for (let i = arrey.length-1; i>=0; i--) {
//     console.log(arrey[i]);
// }


// 3::reverse перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = arrey.length;
// while (i>=0) {
//     if (i%2 ===1) {
//         console.log(`${i}===${arrey[i]}`);
//     }
//     i--
// }

//4::reverse перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = arrey.length; i >0; i--) {
//     if (i%2 === 1) {
//         console.log(`${i}===${arrey[i]}`);
//     }
// }


// 5::reverse перебрати циклом while та вивести  числа тільки парні  значення

// let i = arrey.length;
// while (i >=0) {
//     if (arrey[i]%2 ===0) {
//         console.log(arrey[i]);
//     }
//     i--
// }


// 6::reverse перебрати циклом for та вивести  числа тільки парні  значення
// for (i = arrey.length - 1; i >= 0; i--) {
//     if (arrey[i]%2 === 0) {
//         console.log(arrey[i]);
//     }
// }


// 7::reverse замінити кожне число кратне 3 на слово "okten"
// for (i = arrey.length -1; i >= 0; i--) {
//     if (arrey[i]%3 === 0) {
//         arrey[i] = "okten";
//     }
//     console.log(arrey[i]);
// }



//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let new_arr=[1,2,3,4,5,6,7,8,9,10];
//     for (const number of new_arr) {
//         console.log(number);
//     }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let new_str=['a','b','c','d','e','f','g','h','i','j'];
//     for (const str of new_str) {
//     console.log(str);
//     }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let new_arr2=[1,false,0.5,{name:'kubik'},'ulala',12345,true,5,.0,true];
//     for (const item of new_arr2) {
//     console.log(item);
//     }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let new_arr2=[1,false,0.5,{name:'kubik'},'ulala',12345,true,5,.0,true];
// for (let i = 0; i < new_arr2.length; i++) {
//     if(typeof new_arr2[i]==="boolean")console.log(`${i}===${new_arr2[i]}`);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let new_arr2=[1,false,0.5,{name:'kubik'},'ulala',12345,true,5,.0,true];
// for (let i = 0; i < new_arr2.length; i++) {
//     if(typeof new_arr2[i]==="number")console.log(`${i}===${new_arr2[i]}`);
// }



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let new_arr2=[1,false,0.5,{name:'kubik'},'ulala',12345,true,5,.0,true];
// for (let i = 0; i < new_arr2.length; i++) {
//     if(typeof new_arr2[i]==="string")console.log(`${i}===${new_arr2[i]}`);
// }




//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// //як я люблю мозахізм
// let arr300=[]
// arr300[0]=true;
// arr300[1]=1;
// arr300[2]=0;
// arr300[3]=2;
// arr300[4]='biba';
// arr300[5]='qwerty';
// arr300[6]= {};
// arr300[7]=[];
// arr300[8]=null;
// arr300[9]=false;
// arr300[0]=()=>{};
// for (let i = 0; i < arr300.length; i++) {
//     console.log(arr300[i]);
// }



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     document.write(i+' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     document.write(i+' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     document.write(i+' ');
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2===0){
//         console.log(i+" ")
//         document.write(i+' ');
// }}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2!==0){
//         console.log(i+" ")
//         document.write(i+' ');
// }}
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books=[
    {name: 'The Alchemist',pages:250,authors:['Paulo Coelho'],genres:['live']},
    {name: 'The Auctioneer',pages:450,authors:['Joan Samson'],genres:['horror']},
    {name: 'War and peace',pages:1550,authors:['Tolstoj','jakubowicz'],genres:['War','Peace']},
]
// -знайти наібльшу книжку.
// let max_pages=0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].pages>books[max_pages].pages)max_pages=i;
// }
// console.log(books[max_pages]);


// - знайти книжку/ки з найбільшою кількістю жанрів
// let max_genres=0;
// let max_index=0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].genres.length>books[max_index].genres.length) {
//         max_index = i;
//         max_genres=books[i].genres.length;
//     }
// }
// for (const book of books) {
//     if(book.genres.length===max_genres)console.log(book);
// }

// - знайти книжку/ки з найдовшою назвою
// let max_name=0;
// let max_index=0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].name.length>books[max_index].name.length) {
//         max_index = i;
//         max_name=books[i].name.length;
//     }
// }
// for (const book of books) {
//     if(book.name.length===max_name)console.log(book);
// }

// - знайти книжку/ки які писали 2 автори
// for (const book of books) {
//     if(book.authors.length===2) console.log(book);
// }


// - знайти книжку/ки які писав 1 автор
//
// for (const book of books) {
//     if(book.authors.length===1) console.log(book);
// }