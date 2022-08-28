// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let postDate = JSON.parse(url.searchParams.get('date'));

console.log(postDate);

function newBlock(item, box) {
    for (const itemKey in item) {
        if (typeof item[itemKey] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${itemKey}:${item[itemKey]}`;
            box.appendChild(p);
        } else {

            newBlock(item[itemKey], box);
        }
    }
}

let postContainer = document.getElementsByClassName('post')[0];
newBlock(postDate, postContainer)

fetch(`https://jsonplaceholder.typicode.com/posts/${postDate.id}/comments`)
    .then(value => value.json())
    .then(posts => {
        let commentsContainer = document.getElementsByClassName('comments')[0];
        for (const post of posts) {
            let newcomment = document.createElement('li');
            newcomment.classList.add('comment');
            newBlock(post, newcomment);
            commentsContainer.appendChild(newcomment);
        }
    })
