// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array=['2',true,3.14,'string',false,20,100000,'df',true,'hello'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const firstBook={
    title:'Book',
    pageCount:520,
    genre:'Thriller'
}
const secondBook={
    title: 'Book',
    pageCount: 130,
    genre:'Horror'
}
const thirdBook={
    title:'Book',
    pageCount:322,
    genre:'Historical'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const Book1={
    title:'Book',
    pageCount:200,
    genre:'Romance',
    authors:[{
        name:'Jon Jonson',
        age:40
    }]
}
const Book2={
    title:'Book',
    pageCount:433,
    genre:'Western',
    authors:[{
        name:'Elon Oil',
        age:79
    }]
}
const Book3={
    title:'Book',
    pageCount:259,
    genre:'Fantasy',
    authors:[{
        name:'Bill Middle',
        age:40,
    }]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users=[
    {
        name:'Wannia',
        username:'Wannia',
        password:'Wannia1234567890'
    },
    {
        name:'Oleh',
        username: 'SuberB',
        password: 'qwr134c5d'
    },
    {
        name:'Dima',
        username:'Biba',
        password: 'av56yw4wy'
    },
    {
        name:'Vitaliy',
        username: 'VeTaL',
        password: 'fan_of_nf'
    },
    {
        name:'Vasya',
        username: 'Dead',
        password: 'Pupkin1990'
    },
    {
        name:'Maria',
        username: 'Maria222',
        password: 'password'
    },
    {
        name:'Jenifer',
        username: 'Jen',
        password: '2132223dfdssd'
    },
    {
        name:'Kyle',
        username: 'uSerName',
        password: 'Kyle_Jayson2009'
    },
    {
        name:'Erick',
        username: 'ErickTheBest',
        password: 'Lviv1980'
    },
    {
        name:'Ivan',
        username: 'Vanusha',
        password: '123456'
    }
]
console.log(users[0]["password"]);
console.log(users[1]["password"]);
console.log(users[2]["password"]);
console.log(users[3]["password"]);
console.log(users[4]["password"]);
console.log(users[5]["password"]);
console.log(users[6]["password"]);
console.log(users[7]["password"]);
console.log(users[8]["password"]);
console.log(users[9]["password"]);