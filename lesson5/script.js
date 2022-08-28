const PI=3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b) {
    return a*b;
}
console.log(area(5,7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle_area(r){
    return PI*r;
}
console.log(circle_area(26));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder_area(h,r){
    return 2*PI*r*h+2*PI*r**2;
}
console.log(cylinder_area(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
let some_arr=['1',2,5,true,'destiny']
function printf(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
printf(some_arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function create_p(text){
    document.write(`<p>${text}</p>`)
}
create_p('My biggest failure in life is knowing that I never tried.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create_3li(text){
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
create_3li('Some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function create_nli(text,n){
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text} ${i}</li>`)
    }
    document.write(`</ul>`);
}
create_nli('Some text',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function create_list(arr){
    document.write(`<ul>`);
    for (let i = 0; i <arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`);
}
create_list(['1',true,2,3,4,false,'Бульба']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function masuv(array) {
    for (let i =0; i < array.length; i++) {
        document.write(`<div> ${array[i].id} - ${array[i].name} - ${array[i].age} </div>`)
    }
}
masuv([
    {
        id:1,
        name:'Ivan',
        age:19,
    },
    {
        id:2,
        name:'Zuzanna',
        age:19
    },
    {
        id:3,
        name:'Kuba',
        age:27
    },
    {
        id:1,
        name:'Kaczmarek',
        age:37
    },
])


// - створити функцію яка повертає найменьше число з масиву
function min(arr){
    let min=0;
    for (const arrElement of arr) {
        if(arrElement<min)min=arrElement;
    }
    return min;
}
console.log(min([1, 2, 3, 4, -9, 5, 6, 7, 8, 9, 9]));
//values
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(arr){
    let sum=0;
    for (const arrElement of arr) {
        sum+=arrElement;
    }
    return sum;
}
console.log(sum([1, 2, 3, 4, -9, 5, 6, 7, 8, 9, 9]));