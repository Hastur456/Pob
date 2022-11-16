//1 Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

// Многострочное
let arr = [1,43,6,7,8,3];
let arr_even = arr.filter((element) => element % 2);
let arr_even_summ = arr_even.reduce((xiu, element) => {
    return xiu + Math.pow(element, 2);
}, 0);
console.log(arr_even_summ);

// Однострочная запись
console.log(
    [1,43,6,7,8,3]
        .filter((element) => !(element % 2))
        .reduce((accumulator, element) => accumulator + Math.pow(element, 2),0)
);

//1 Напишите функцию, которая пишет в консоль число в заданном диапазоне, в случае,
//если оно успешно делится или не делится с остатком или без остатка в зависимости от параметров. infimum supremum


// 1 Вариант решения 
// function getWoman_or_man(woman_or_man) {
//     if (woman_or_man === 'M', woman_or_man === 'm') {
//         console.log('Ваш пол мужской.')
//     } else if (woman_or_man === 'W', woman_or_man === 'w') {
//         console.log('Ваш пол женский.')
//     } else {
//         console.log('Вы инопришленец')
//     };
// };
// getWoman_or_man('m');

// // 2 Вариант решения
// let getGender = (gender) => {
//     switch(gender.toLowerCase()) {
//         case 'm': console.log('Ваш пол мужской.')
//             break;
//         case 'w': console.log('У вас женский пол.')
//             break;
//         default: console.log('Вы инопришленец')
//     };
// };

// let gender = prompt('Введите ваш пол.')
// getGender(gender);

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
let getDayOfTheWeek = (day) => {
    if (day === 1) {
        return 'Понедельник'}
    if (day === 2) {
        return 'Вторник'}
    if (day === 3) {
        return 'Среда'}
    if (day === 4) {
        return 'Четверг'}
    if (day === 5) {
        return 'Пятница'}
    if (day === 6) {
        return 'Суббота'}
    if (day === 7) {
        return 'Воскресенье'}
    else {
        return 'Введите число от одного до семи'};
};
console.log(getDayOfTheWeek(1));

//Написать функцию, которая принимает 
//строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.
function text(data) {
    let x = data.split('.');
    let y = [];
    let z;

    for (let i = 0; i < x.length; i++) {
        let z = x[i];
        z = z.split(' ')
        y.push(z[0])
    }
    return y.join(', ')
}

console.log(text('Написать функцию, которой передаем, имя, фамилия и возраст,' +
    'и получаем строку Привет Иван Петров с возрастом 17 лет (только здесь данные,' +
    'которые были переданы в функцию).Написать функцию, которая принимает пол человека,' +
    'результат функции возвращает строку Ваш пол мужской (или женский) или же Ваш пол не опеределен.'+
    'Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.'+
    'Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении,'+
    'через запятую.Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утроденьвечерночи Иван)'
));

// Добавление элементов через импут
const serchInput = document.querySelector('.btn');

const options = {
    'once': true,
}

function inputOnclick() {
    const placeOfNewElement = document.querySelector('.anime')
    const value_input = document.querySelector('.input_inner').value;
    const newElement = document.createElement('div');
    const innerNewElement = document.createElement('a');

    innerNewElement.innerHTML = `${value_input}`;

    placeOfNewElement.append(newElement);
    newElement.append(innerNewElement);

    innerNewElement.classList.add('title')

    innerNewElement.setAttribute('href', `#`)

    innerNewElement.style.backgroundColor = 'rgb(235, 109, 55)';
};

serchInput.addEventListener("click", inputOnclick, options)

// События JS

