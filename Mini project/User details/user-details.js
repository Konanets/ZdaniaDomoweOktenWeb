// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//

let url = new URL(location.href);
let userDate = JSON.parse(url.searchParams.get('date'));

console.log(userDate);
        function newUserBlock(item, box) {
            for (const itemKey in item) {
                if (typeof item[itemKey] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${itemKey}:${item[itemKey]}`;
                    box.appendChild(p);
                } else {

                    newUserBlock(item[itemKey], box);
                }
            }
        }

        let postContainer = document.getElementsByClassName('user')[0];
        newUserBlock(userDate, postContainer)


let showPostsButton = document.createElement("button");
showPostsButton.innerText = 'Post of current user';
showPostsButton.classList.add('showPostsbtn');
document.body.appendChild(showPostsButton);

let postsContainer = document.createElement('ol');
postsContainer.classList.add('posts');
document.body.appendChild(postsContainer);

showPostsButton.addEventListener('click', () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${userDate.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            postsContainer.innerHTML='';

            for (const post of posts) {
                let newpost = document.createElement('li');
                newpost.classList.add('post');

                let h4 = document.createElement('h4');
                h4.innerText = post.title;
                newpost.appendChild(h4);

                let postbtn = document.createElement('button');
                postbtn.innerText = 'Show details';
                newpost.appendChild(postbtn);
                postbtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.open(`../Post details/post-details.html?date=${JSON.stringify(post)}`, '_blank');
                })

                postsContainer.appendChild(newpost)
            }
        })
})