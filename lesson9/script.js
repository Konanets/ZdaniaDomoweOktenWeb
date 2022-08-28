// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


for (const simpson of simpsons) {
    let div=document.createElement('div');
    div.classList.add('member');
    document.body.appendChild(div);

    let h3=document.createElement('h3');
    h3.innerText=`${simpson.name} ${simpson.surname} age: ${simpson.age}`;
    div.appendChild(h3);

    let p=document.createElement('p');
    p.innerText=simpson.info;
    div.appendChild(p);

    let img=document.createElement('img');
    img.src=simpson.photo;
    div.appendChild(img);


}

// Цикл в циклі
// - Є масив
let coursesArray = [
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const course of coursesArray) {

    let kurs = document.createElement('course');
    let titleElement = document.createElement('h2');
    titleElement.innerText = course.title;
    kurs.appendChild(titleElement);

    let monthDurationElement = document.createElement('div');
    monthDurationElement.innerText = course.monthDuration;
    kurs.appendChild(monthDurationElement);

    let hourDurationElement = document.createElement('div');
    hourDurationElement.innerText = course.hourDuration;
    kurs.appendChild(hourDurationElement);

    let modulesElement = document.createElement('ul');

    for (const moduleItem of course.modules) {
        let module = document.createElement('li');
        module.innerText = moduleItem;
        modulesElement.appendChild(module);
    }

    kurs.appendChild(modulesElement);
    document.body.appendChild(kurs);
}

// ------------------
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


 let div=document.createElement('div');
div.classList.add('wrap','collapse','alpha','beta');
div.style.color='Black';
div.style.background='Green';
div.style.fontSize='36px';
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let list = ['Main','Products','About us','Contacts'];
let menu=document.getElementsByClassName('menu')[0];
for (const item of list) {
    let li=document.createElement('li');
    li.innerText=item;
    menu.appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const {title, monthDuration} of coursesAndDurationArray) {
    let div=document.createElement('div');
    div.innerHTML=`<h3>${title}---${monthDuration}</h3>`;
    document.body.appendChild(div);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const {title, monthDuration} of coursesAndDurationArray2) {
    let div=document.createElement('div');
    div.classList.add('item');

    let h1=document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText=title;
    div.appendChild(h1);

    let p=document.createElement('p');
    p.classList.add('description');
    p.innerText=monthDuration+'';
    div.appendChild(p);

    document.body.appendChild(div);
}

// -----------
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

    let somebox=document.createElement('div');
    let p=document.createElement('p');
    p.innerText='при натисканні на кнопку зникне елемент';
    p.id='text';
    somebox.appendChild(p);

    let button=document.createElement('button');
    button.innerText='Press me';

    button.addEventListener('click',()=>{
        p.classList.toggle('falsz');
    });
    somebox.appendChild(button);
    document.body.appendChild(somebox);

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    let forma=document.createElement('form');
    forma.id='forma';
    document.body.appendChild(forma);

    let inputAge=document.createElement('input');
    inputAge.type='number';
    inputAge.name='age';
    inputAge.placeholder = 'Введіть свій вік';

    let inputButton=document.createElement('button');
    inputButton.innerText='На перевірку';

    forma.append(inputAge, inputButton);

    forma.addEventListener('submit',e=>{
        e.preventDefault();
        if(+e.target.age.value< 18){
            alert('Вам менше 18 років. Ви не можете бути членом нашого клубу');
        }else {
            alert('Вітаємо в бійцівському клубі');
        }
    })

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let cell = document.createElement("div");

let formCell = document.createElement("form");
formCell.id = 'formCell';

let rowInp = document.createElement("input");
rowInp.id = 'rowInp';
rowInp.type = 'number';
rowInp.placeholder = 'Введіть кількість стовпців';

let columnInp = document.createElement("input");
columnInp.id = 'columnInp';
columnInp.type = 'number';
columnInp.style.margin = '15px';
columnInp.placeholder = 'Введіть кількість рядків';

let contentInp = document.createElement("input");
contentInp.id = 'contentInp';
contentInp.type = 'text';
contentInp.placeholder = 'Введіть контент ';

let btnCell = document.createElement("button");
btnCell.innerText = 'Зберегти';
btnCell.style.margin = '15px';

document.body.appendChild(cell);
cell.appendChild(formCell);
formCell.append(rowInp,columnInp,contentInp, btnCell);

let cellResult = document.createElement("div");
cellResult.classList.add('cell');
cellResult.classList.add('table');

btnCell.onclick=  function (e) {
    document.body.appendChild(cellResult);
    e.preventDefault();
    cellResult.innerHTML='';
    let rows = +rowInp.value;
    let columns = +columnInp.value;
    let content = contentInp.value;
    for (let i = 0; i < rows; i++) {

        let boxRow=document.createElement('div');
        for (let j = 0; j < columns; j++) {
            let w = 100;
            let cardItem = document.createElement("div");
            cardItem.style.minWidth = `${w}px`;
            cardItem.style.border = '1px solid black';
            cardItem.style.margin = '3px';

            let pItem = document.createElement("div");
            pItem.innerText = content;
            pItem.style.fontSize = '20px';
            boxRow.append(cardItem);
            cardItem.append(pItem);
        }
        cellResult.appendChild(boxRow);
        console.log(boxRow)
    }
}