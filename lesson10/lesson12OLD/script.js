// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let container=document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

fetch(' https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data)=>{
    for (const {userId, id, title,body} of data) {

        let box=document.createElement('div');
        box.classList.add('box');

        let h3=document.createElement('h3');
        h3.innerText=`${userId}-${id}-${title}`;
        box.appendChild(h3);

        let p=document.createElement('p');
        p.innerText=body;
        box.appendChild(p);

        container.appendChild(box);

    }
})


//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let container2 = document.createElement('div');
        container2.classList.add('container2');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');

            let h3=document.createElement('h3');
            h3.innerText=`ID: ${comment.id}-Name: ${comment.name}-Email: ${comment.email}`;
            divCard.appendChild(h3);

            let p=document.createElement('p');
            p.innerText=`${comment.body}`;
            divCard.appendChild(p);

            container2.appendChild(divCard);
            document.body.appendChild(container2);
        }
    })