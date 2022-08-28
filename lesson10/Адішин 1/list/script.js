// на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let data = localStorage.getItem('catalogProduct');
let catalogProductParse = JSON.parse(data);

for (const productItem of catalogProductParse) {
    let productCard = document.createElement("div");
    productCard.classList.add('card');
    productCard.innerHTML = `
                            <h2>Product Name: ${productItem['Product Name']}</h2>
                            <h2>Quantity product: ${productItem['Quantity product']} pcs. </h2>
                            <h2>Product price: ${productItem['Product price']} $</h2>
                            <img src="${productItem.Image}" alt=""/>`;
    let deleteElement = document.createElement("button");
    deleteElement.innerText = 'Delete product >';
    deleteElement.id = `del${catalogProductParse.indexOf(productItem)}`;
    productCard.appendChild(deleteElement);
    document.body.append(productCard);
    let del = document.getElementById(`del${catalogProductParse.indexOf(productItem)}`);
    del.addEventListener('mousedown', function () {
        catalogProductParse.splice(catalogProductParse.indexOf(productItem),1);
        localStorage.setItem('catalogProduct', JSON.stringify(catalogProductParse));
        alert('Товар видалений');
        location.reload();
    });
}
let clearCart = document.getElementById('clearCart');
clearCart.addEventListener('mousedown', function (event) {
    localStorage.removeItem('catalogProduct');
    alert(' Корзина очищена');
    location.reload();
});