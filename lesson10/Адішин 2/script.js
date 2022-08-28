// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"


async function writer(text){
    for (let i = 0; i < text.length; i++) await timer(text[i])
}
function timer(letter){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(letter)
            typewriter.innerText += letter
            resolve()
        }, Math.random() *1000)
    })
}
let typewriter = document.getElementById('typewriter');
let text=document.getElementById('specialtext');
let btn=document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    typewriter.innerText='';
    writer(text.value);
})


// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

