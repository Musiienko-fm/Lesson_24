"use strict"
console.log('Функции в JAVASCRIPT');

//№1
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

//№2
showMessage();
function showMessage() {
	console.log('Сообщение');
}

//№3
/*
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}
*/

//№4
/*if (2 > 1) {
	function showAd() {
		console.log('Сообщение');
	}
}
showAd();
*/
let showAd;
if (2 > 1) {
	showAd = function () {
		console.log('Сообщение');
	}
}
showAd();


console.log('Циклы FOR и WHILE в JavaScript. Директивы break и continue.');

//№1
console.log('Завдання 1');
let arr = ['Ваня', 'Иштван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);

//№2
console.log('Завдання 2');
let users = ['Ваня', 'Иштван'];
let newUsers = users.concat('Оля');
console.log(newUsers);

let remUser = users.concat();
remUser.forEach(function (item, index) {
	if (item === 'Иштван') {
		remUser.splice(index, 1, 'Петя');
	}
});
console.log(remUser);

let delUser = users.concat();
let deleted = delUser.splice(0, 1);
console.log(delUser);
console.log(deleted);

let addUser = users.concat();
addUser.splice(0, 0, 'Маша', 'Паша');
console.log(addUser);

//№3
console.log('Завдання 3');
let delArr = arr.concat();
let remote = delArr.splice(1, 1);
console.log(remote);

//№4
console.log('Завдання 4');
let str = 'Ваня,Иштван,Оля';
let addArr = str.split(',');
console.log(addArr);

//№5
console.log('Завдання 5');
let numbArr = [9, 2, 8,];
//let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
let reduceValue = numbArr.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});


console.log('JavaScript Document object model (DOM) за час. Изменение HTML CSS. Атрибуты и свойства. Окружение.');

//№1
const sayHi = document.querySelector('[data-say-hi]');
console.log(sayHi.innerText);

//№2
const listName = document.querySelectorAll('li');
for (const li of listName) {
	if (li.textContent === 'Йончи') {
		console.log(li);
	}
}

//№3
const classLike = document.querySelectorAll('.like');
console.log(classLike);

//№4
const list = document.querySelector('.list-add');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);
console.log(list);

console.log('JavaScript размеры прокрутка и координаты элементов на странице и окна браузера');

//№1
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
const windowWidth = window.innerWidth;
console.log(windowWidth);
const widthScroll = windowWidth - mainElementWidth;
console.log(`Ширина полоси прокрутки ${widthScroll} px`);

//№2
function setScrolTo() {
	window.scrollTo(0, 100);
}
setTimeout(setScrolTo, 1000);

//№3
const item = document.querySelectorAll('.first-task__task');
const itemSelected = item[1];
const getItemCoord = itemSelected.getBoundingClientRect();
console.log(getItemCoord);

const itemTwo = document.querySelector('.second-task__title');
const getItemTwoCoord = itemTwo.getBoundingClientRect();
console.log(getItemTwoCoord);

const itemThree = document.querySelectorAll('.third-task__task');
const itemThreeSelected = itemThree[3].querySelector('.task__item');
const getItemThreeCoord = itemThreeSelected.getBoundingClientRect();
console.log(getItemThreeCoord);



















