document.body.innerHTML=`<h1>Favorite Users:</h1>`;
let favorites=JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);

let ul=document.createElement('ul');
for (const favorite of favorites) {
    let li=document.createElement('li');
    li.innerText=favorite;
    ul.appendChild(li);
}
document.body.appendChild(ul);