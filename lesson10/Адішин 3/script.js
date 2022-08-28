// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою



//Колбеками
// function wokeUp(status, callback) {
//     setTimeout(() => {
//         if (status) {
//             callback(null, 'Доброго ранку Україно');
//         } else {
//             callback('Проспав');
//         }
//     }, 2000)
// }
//
// function haveBreakfast(status, callback) {
//     setTimeout(()=>{
//         if(status){
//             callback(null, 'Покушав');
//         }else{
//             callback('Нєма сніданку');
//         }
//     },1000)
// }
//
// function work(status, callback){
//     setTimeout(()=>{
//         if(status){
//             callback(null, 'Заробив money');
//         }else{
//             console.log('No money?')
//         }
//     },2000)
// }
//
// function sport(status, callback){
//     setTimeout(()=>{
//         if(status){
//             callback(null,'Muscles grow up');
//         }else{
//             callback('Muscles do not grow');
//         }
//     },1000)
// }
// function ideDoSklepu(status, callback){
//     setTimeout(()=>{
//         if(status){
//             callback(null,'Купив продукти');
//         }else{
//             callback('Не Купив продукти (((');
//         }
//     },500)
// }
//
// function learningPrograming(status, callback){
//     setTimeout(()=>{
//         if(status){
//             callback(null,'Вчуся Вчуся');
//         }else{
//             callback('Не Вчуся');
//         }
//     },1500)
// }
//
// function sleep(isSleeping, cb) {
//     setTimeout(() => {
//         if (isSleeping) {
//             cb(null, 'Śpi Śpi');
//         } else {
//             cb('nie Śpisię');
//         }
//     }, 300);
// }
//
// wokeUp(true,(err, date)=>{
//     if(!err){
//         console.log(date);
//         haveBreakfast(true,(err, date)=>{
//             if(!err){
//                 console.log(date);
//                 work(true,(err, date)=>{
//                     if(!err){
//                         console.log(date);
//                         sport(false,(err, date)=>{
//                             if(!err){
//                                 console.log(date);
//                                 ideDoSklepu(true,(err, date)=>{
//                                     if(!err){
//                                         console.log(date);
//                                         learningPrograming(true,(err, date)=>{
//                                             if(!err){
//                                                 console.log(date);
//                                                 sleep(true,(err, date)=>{
//                                                     if(!err){
//                                                         //console.log(date);
//                                                     }else{
//                                                         console.log(err);
//                                                     }
//                                                 })
//                                             }else{
//                                                 console.log(err);
//                                             }
//                                         })
//                                     }else{
//                                         console.log(err)
//                                     }
//                                 });
//                             }else{
//                                 console.log(err);
//                             }
//                         })
//                     }else{
//                         console.log(err);
//                     }
//                 })
//             }else{
//                 console.log(err);
//             }
//         })
//     }else{
//         console.log(err);
//     }
// })



//Промісами  //Потрібно буде закоментувати те що вище
function wokeUp(status) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (status) {
                resolve('Доброго ранку Україно');
            } else {
                reject('Проспав');
            }
        }, 2000)
    } )
}

function haveBreakfast(status) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status){
                resolve('Покушав');
            }else{
                reject('Нєма сніданку');
            }
        },1000)
    })
}

function work(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status){
                resolve('Заробив money');
            }else{
                reject('No money?')
            }
        },2000)
    })
}

function sport(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status){
                resolve('Muscles grow up');
            }else{
                reject('Muscles do not grow');
            }
        },1000)
    })
}
function ideDoSklepu(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status){
                resolve('Купив продукти');
            }else{
                reject('Не Купив продукти (((');
            }
        },500)
    })
}

function learningPrograming(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(status){
                resolve('Вчуся Вчуся');
            }else{
                reject('Не Вчуся');
            }
        },1500)
    })
}

function sleep(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                resolve('Śpi Śpi');
            } else {
                reject('nie Śpisię');
            }
        }, 300);
    })
}

// wokeUp(true).then(result=>{
//     console.log(result);
//     return haveBreakfast(true);
// }).then(result=>{
//     console.log(result);
//     return work(true);
// }).then(result=>{
//     console.log(result);
//     return sport(true);
// }).then(result=>{
//     console.log(result);
//     return ideDoSklepu(true);
// }).then(result=>{
//     console.log(result);
//     return learningPrograming(true);
// }).then(result=>{
//     console.log(result);
//     return sleep(true);
// }).then(result=>{
//     console.log(result);
// }).catch(e=>{
//     console.log(e);
// })

//асинк авейт не впевнений чи це так робити!!!
    try {
        async function myDay() {
            console.log(await wokeUp(true));
            console.log(await haveBreakfast(true));
            console.log(await work(false));
            console.log(await sport(true));
            console.log(await ideDoSklepu(true));
            console.log(await learningPrograming(true));
            console.log(await sleep(true));

        }
        let b=myDay();
        //console.log(b);
    }catch (e) {
        console.log(e);


}


