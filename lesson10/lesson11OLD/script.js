// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const {name,age}=document.forms.userForm;
let btn = document.forms.userForm.btn;

btn.onclick = (e) => {
    e.preventDefault();
    let user = {
        name: name.value,
        age: age.value
    };
    localStorage.setItem('user', JSON.stringify(user));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


const {model,type, volume, btn2}=document.forms.carForm;


btn2.onclick=(e)=>{
    e.preventDefault();
    let newArr = JSON.parse(localStorage.getItem('Car')) || [];
    newArr.push({
        model:model.value,
        type:type.value,
        volume:type.value})
    localStorage.setItem('Car', JSON.stringify(newArr));
}
