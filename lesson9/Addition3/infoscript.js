// Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log('Тег елементу :' + e.target.tagName + ',',
//         'список класів:' + ' ' + e.target.classList + ',', 'id:' + ' ' + e.target.id + '.',
//         'Висота * Ширина:' + ' ' +  e.target.clientHeight + ' ' + '*' + ' ' + e.target.clientWidth);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let popup = document.createElement("div");
// popup.classList.add('popup')
// let popupSpan = document.createElement("span");
// popupSpan.id  = 'myPopup'
// popupSpan.classList.add('popuptext')
// document.body.prepend(popup)
// popup.append(popupSpan)
//
// document.addEventListener('click',
//     (e) => {
//         let name = e.target.nodeName.toLowerCase();
//         let classes = e.target.classList.length ? e.target.classList : 0;
//         let id = e.target.id || 0;
//         let height = e.target.offsetHeight;
//         let width = e.target.offsetWidth;
//
//         console.log(`tag name = ${name}`)
//         console.log(`classes = ${classes}`)
//         console.log(`id = ${id}`)
//         console.log(`height = ${height}`)
//         console.log(`width = ${width}`)
//
//         let popup = document.getElementById("myPopup");
//         popup.classList.toggle("show");
//         popup.innerText = `tag name: ${name},
//      height & width: ${height} * ${width},
//      classes: ${classes},
//      id: ${id}`
//     })


