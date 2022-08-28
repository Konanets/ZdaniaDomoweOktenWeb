// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class address{

    constructor(street, suite, city, zipcode,lat, lng) {
        this.street=street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo=new geo(lat,lng);
    }
}

class company{
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class user{
    constructor(id, name, username, email,address, phone, website,company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address=address;
        this.phone = phone;
        this.website = website;
        this.company=company;
    }
}
let user_address=new address('Kulas Light','Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496');
let user_company=new company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
let new_user=new user(1,'Leanne Graham','Bret','Sincere@april.biz',user_address,'1-770-736-8031 x56442','hildegard.org',user_company)
console.log(new_user)



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Constructor(titleOfTag, action, attrs) {
    this.titleofTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

function Attrs(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}


let a = new Constructor('a', 'Тег <a> є одним з найважливіших елементів HTML і призначений для створення посилань. Залежно від наявності атрибутів name або href тег <a> встановлює посилання або якір. Якорем називається закладка всередині сторінки, яку можна вказати як ціль посилання. Під час використання посилання, яке вказує на якір, відбувається перехід до закладки всередині веб-сторінки.',
    [new Attrs('accesskey', 'Активація посилання за допомогою комбінації клавіш.'),
        new Attrs('coords', 'Встановлює координати активної зони.'),
        new Attrs('downoald', 'Пропонує завантажити вказаний за посиланням файл.'),
        new Attrs('href', 'Вказує адресу документа, на яку слід перейти.')]);

console.log(a);

let div = new Constructor('div', 'Елемент <div> є блоковим елементом і призначений виділення фрагмента документа з метою зміни виду вмісту. Як правило, вид блоку керується за допомогою стилів. Щоб не описувати кожного разу стиль усередині тега, можна виділити стиль у зовнішню таблицю стилів, а для тега додати атрибут class або id із ім\'ям селектора.',
    [new Attrs('align', 'Визначає вирівнювання вмісту тега <div>.'),
        new Attrs('title', 'Додає спливаючу підказку до вмісту.')]);

console.log(div);

let h1 = new Constructor('h1', 'HTML пропонує шість заголовків різного рівня, які показують відносну важливість розділу, розташованого після заголовка. Так, тег <h1> є найбільш важливим заголовком першого рівня, а тег <h6> служить для позначення заголовка шостого рівня і є найменш значним. За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного зображення, заголовки наступного рівня за розміром менше. Теги <h1> ,..., <h6> відносяться до блокових елементів, вони завжди починаються з нового рядка, а після них інші елементи відображаються на наступному рядку. Крім того, перед заголовком та після нього додається порожній простір.',
    [new Attrs('align', 'Визначає вирівнювання заголовка.')]);

console.log(h1);
// ...
// ...
// ...
// і так далі :)