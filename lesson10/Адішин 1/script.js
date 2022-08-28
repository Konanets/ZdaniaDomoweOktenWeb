// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.createElement("form");
form.id = 'form';

let name = document.createElement("input");
name.id = 'name';
name.type = 'text';
name.placeholder = 'Введіть назву товару';

let ile = document.createElement("input");
ile.id = 'ile';
ile.type = 'number';
ile.style.margin = '15px';
ile.placeholder = 'Введіть кількість товару';

let price = document.createElement("input");
price.id = 'price';
price.type = 'number';
price.placeholder = 'Введіть ціну';

let src = document.createElement("input");
src.id = 'src';
src.type = 'url';
src.placeholder = 'Введіть фото товару';

let btnCell = document.createElement("button");
btnCell.innerText = 'Зберегти';
btnCell.style.margin = '15px';
btnCell.onsubmit=(e)=>{e.preventDefault()}

document.body.appendChild(form);
form.append(name,ile,price,src, btnCell);

let newform=document.createElement('form');
newform.action='list/index.html';
newform.target='_blank';
newform.innerHTML=` <button>Products list</button>`;
document.body.appendChild(newform);

let productsForm = document.forms.form;

productsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let catalogProduct = [];
    if (!localStorage.getItem('catalogProduct')){
        catalogProduct.push({'Product Name': this.name.value,
            'Quantity product': this.ile.value,
            'Product price': this.price.value,
            'Image': this.src.value });
        localStorage.setItem('catalogProduct', JSON.stringify(catalogProduct));
    }else{
        let data = localStorage.getItem('catalogProduct');
        let catalogProductParse = JSON.parse(data)
        catalogProductParse.push({'Product Name': this.name.value,
            'Quantity product': this.ile.value,
            'Product price': this.price.value,
            'Image': this.src.value });
        localStorage.setItem('catalogProduct', JSON.stringify(catalogProductParse));
    }
    alert('Товар доданий')
})