// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let classes = []
function searchClass(element) {
        if(element.className){
            classes.push(...element.className.split(' '))
        }
    if (element.children.length) {
        for (const dytyna of element.children) {
            searchClass(dytyna);
        }
    }
}
searchClass(document.body)
console.log(classes)