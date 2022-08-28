

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let chooseOption = document.forms.checkForm;
let contWrap = document.getElementById('wrap_filterResult');
let wrapListUser = document.createElement("div")
wrapListUser.id = 'wrapListUser'
contWrap.append(wrapListUser)

chooseOption.onsubmit = function (event) {
    while (wrapListUser.firstChild) {
        wrapListUser.removeChild(wrapListUser.firstChild);
    }
    event.preventDefault();
    let chooseAge = this.age.checked;
    let chooseStatus = this.status.checked;
    let chooseCity = this.city.checked;
    let resAge = usersWithAddress.filter(res =>
        (chooseAge ? res.age > 29: true)
        && (chooseStatus ? res.status === false: true)
        && (chooseCity ? res.address.city === 'Kyiv' : true));
    resAge.forEach(user =>{
        let filterResult = document.createElement("div")
        filterResult.innerText = `
            id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`;
        wrapListUser.appendChild(filterResult);
    })
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// Не до кінця зроблене, але уже працює +- як нада !!!!!!


function foobar(htmlElemnt) {
    if(!document.getElementById('nextBtn')&&!document.getElementById('prevBtn')){
        let nextBtn = document.createElement('button');
        nextBtn.innerText='Next';
        nextBtn.id='nextBtn';
        let prevBtn = document.createElement('button');
        prevBtn.innerText='Prev';
        prevBtn.id='prevBtn';
        document.body.append(nextBtn , prevBtn);
    }
    document.getElementById('nextBtn').onclick = function () {
        if (htmlElemnt.children.length) {
            foobar(htmlElemnt.firstElementChild);
        }
        else if(!!htmlElemnt.nextElementSibling) {
            foobar(htmlElemnt.nextElementSibling);
        }
        else if(!!htmlElemnt.parentNode.nextElementSibling){
            foobar(htmlElemnt.parentNode.nextElementSibling);
        }
        else {
            console.log('Кінець');
        }
    };
    document.getElementById('prevBtn').onclick = function () {
        if(!!htmlElemnt.previousElementSibling){
            foobar(htmlElemnt.previousElementSibling);
        }
        else if (!!htmlElemnt.parentNode) {
            foobar(htmlElemnt.parentNode);
        }else console.log('Початок');
    };
    console.log(htmlElemnt)
}
foobar(document.body)

//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

const background_photos=[
    'https://raw.githubusercontent.com/Konanets/Photos/master/1.jpg',
    'https://raw.githubusercontent.com/Konanets/Photos/master/2.jpg',
    'https://raw.githubusercontent.com/Konanets/Photos/master/3.jpg',
    'https://images2.alphacoders.com/501/thumb-1920-501152.jpg',
]

function setBg(link) {
    const img = new Image();
    img.src = link
    img.onload = () => {
        document.getElementById('backgr').style.background=`url("${img.src}") no-repeat center center fixed`;
        document.getElementById('backgr').style.backgroundSize='cover';
    };
}
//https://raw.githubusercontent.com/Konanets/Photos/master/1.jpg
setBg("https://images8.alphacoders.com/712/thumb-1920-712861.jpg");
document.getElementById('slider_next').addEventListener('click',next_prev);
document.getElementById('slider_prev').addEventListener('click',next_prev)

function next_prev(targ){
    let myArray = background_photos.indexOf((/".+"/g.exec(document.getElementById('backgr').style.background))[0].replaceAll('"',''));
    if(targ.target.id==='slider_next')
    {
        if(myArray===background_photos.length-1)myArray=0;
        else myArray++;
        setBg(background_photos[myArray]);
    }
    else{
        if(myArray===0)myArray=background_photos.length-1;
        else myArray--;
        setBg(background_photos[myArray]);
    }
}


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

