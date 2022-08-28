// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(51, 'Ivan', 'Konanec', 'ivankonanec@gmail.com', 123456789),
    new User(2, 'Oleh', 'erh', 'geregnanec@gmail.com', 123434789),
    new User(3, 'Dima', 'fdgdf', '235onaert@gmail.com', 123434789),
    new User(94, 'Kolya', 'erh', 'bdfdbkoertec@gmail.com', 123347789),
    new User(5, 'boba', 'reg', 'idfhfdhkonretec@gmail.com', 12346389),
    new User(6, 'biba', 'dfhdfhdfh', 'ivanketrec@gmail.com', 123456789),
    new User(17, 'didi', 'dfh', 'dfhdfhkonanec@gmail.com', 12347789),
    new User(8, 'gigg', 'dfh', '34t34mail.com', 12347789),
    new User(9, 'Bili', 'fdhdfh', 'dfbfdbc@gmail.com', 125686789),
    new User(100, 'Homer', 'dfhdfh', 'ireetterterec@retcom', 1233476789),
]
console.log(users)
// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));
// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1, user2) => user1.id - user2.id));
;

// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Clients = [
    new Client(51, 'Ivan', 'Konanec', 'ivankonanec@gmail.com', 123456789, ['tomatos', 'bulba']),
    new Client(2, 'Oleh', 'erh', 'geregnanec@gmail.com', 123434789, ['jabka', 'hruszi']),
    new Client(3, 'Dima', 'fdgdf', '235onaert@gmail.com', 123434789, ['pizza', 'banana', 'apelsina']),
    new Client(94, 'Kolya', 'erh', 'bdfdbkoertec@gmail.com', 123347789, ['tomato', 'water', 'water', 'tea', 'lemon', 'beef', 'potato']),
    new Client(5, 'boba', 'reg', 'idfhfdhkonretec@gmail.com', 12346389, ['tea', 'lemon', 'beef', 'potato']),
    new Client(6, 'biba', 'dfhdfhdfh', 'ivanketrec@gmail.com', 123456789, ['bread', 'spam', 'orange', 'carrot', 'water'])
]

// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
Clients.sort(({order: order1}, {order: order2}) => order1.length - order2.length)
console.log(Clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,graduation_year,max_speed,engine_volume){
//             this.model=model;
//             this.producer=producer;
//             this.graduation_year=graduation_year;
//             this.max_speed=max_speed;
//             this.engine_volume=engine_volume;
//             this.drive=()=>{
//                 console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//             }
//             this.info=()=>{
//                 console.log(`model=${this.model}\n`+
//                 `producer=${this.producer}\n`+
//                 `graduation_year=${this.graduation_year}\n`+
//                 `max_speed=${this.max_speed}\n`+
//                 `engine_volume=${this.engine_volume}`)
//             }
//             this.increaseMaxSpeed=newSpeed=>this.max_speed+=newSpeed;
//             this.changeYear=newValue=>this.graduation_year=newValue;
//             this.addDriver=driver=>this.driver=driver;
// }
// let car=new Car('A3000', 'BMW', 2020, 260, 3.0);
// car.drive()
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2005);
// car.addDriver({name:'Vasya',pravo_jazdy:false});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, graduation_year, max_speed, engine_volume) {
        this.model = model;
        this.producer = producer;
        this.graduation_year = graduation_year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive = () => {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }

    info() {
        for (const argument in this) {
            if(typeof this[argument]!=='function') console.log(`${argument} - ${JSON.stringify(this[argument])}`)
        }
    }
    increaseMaxSpeed = (newSpeed )=> this.max_speed += newSpeed;
    changeYear = (newValue )=> this.graduation_year = newValue;
    addDriver = (driver) => this.driver = driver;
}

let car = new Car('A3000', 'BMW', 2020, 260, 3.0);
car.drive()
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2005);
car.addDriver({name: 'Vasya', pravo_jazdy: false});
//car.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let popelushki=[
    new Popelushka('Diana',25,125),
    new Popelushka('Olena',16,135),
    new Popelushka('Oksana',17,150),
    new Popelushka('Daryna',27,136),
    new Popelushka('Zuzanna',25,144),
    new Popelushka('Nikola',16,122),
    new Popelushka('Daria',35,109),
    new Popelushka('Maria',56,111),
    new Popelushka('Marge',18,123),
    new Popelushka('Andrianna',29,151),
    new Popelushka('Agata',25,141)
];


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.\
class PrinceOfPersia{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let princ=new PrinceOfPersia('Homer',1000,123);



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of popelushki) {
    if(girl.size===princ.slipper){
        console.log(`${princ.name}+${girl.name}=Love`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(popelushki.find(({size}) => size === princ.slipper));


