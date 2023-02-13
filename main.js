const barraLife = document.querySelector('.bar-life-progress');
const barraFood = document.querySelector('.bar-food');
const barraSleep = document.querySelector('.bar-sleep');
const buttonFood = document.querySelector('.button-food');
const buttonSleep = document.querySelector('.button-sleep');
const imagenChange = document.querySelector('#change-img')

let lifeValue = 100;
let sleepValue = 100;
let foodValue = 100;

barraFood.classList.toggle("final");
barraSleep.classList.toggle("final");
barraLife.classList.toggle("final");

//Barra de comida de Richar

function barFoodHungry() {

    barraFood.style.width = `${foodValue}%`;


    if(foodValue >= 70){
        barraFood.style.backgroundColor = 'green';
    }else if(foodValue >=50){
        barraFood.style.backgroundColor = 'yellow';
    }else if(foodValue >=20){
        barraFood.style.backgroundColor = 'orange';
    }else {
        barraFood.style.backgroundColor = 'red';
    }
}

buttonFood.addEventListener('click', buttonFoodEat);

function buttonFoodEat() {
    foodValue = foodValue + 10;
    if(foodValue > 100) {
        foodValue = 100;
    }
    barFoodHungry();
}

let foodHungryInterval = setInterval(
    function(){
        foodValue = foodValue - 10;
        if((foodValue > 0) && (foodValue <= 40)){
            imagenChange.src = './imagenes/mickey-mouse-cry.gif'
        }else  if(foodValue < 0){
            clearInterval(this);
            foodValue = 0;
    }
     barFoodHungry()
    }, 3000);

//Barra de sueño de Richar

function barSleep() {

    barraSleep.style.width = `${sleepValue}%`;

    if(sleepValue >= 70){
        barraSleep.style.backgroundColor = 'green';
    }else if(sleepValue >=50){
        barraSleep.style.backgroundColor = 'yellow';
    }else if(sleepValue >=20){
        barraSleep.style.backgroundColor = 'orange';
    }else {
        barraSleep.style.backgroundColor = 'red';
    }
}

let sleepInterval = setInterval(
    function(){
        sleepValue = sleepValue - 10;
        if(sleepValue < 0){
            clearInterval(this);
            sleepValue = 0;
        }
        barSleep()
    }, 2000);

buttonSleep.addEventListener('click', buttonSleeping);

function buttonSleeping() {
    sleepValue = sleepValue + 10;
    if(sleepValue > 100) {
        sleepValue = 100;
    }
    barSleep();
}

//Barra de Vida de Richar

function barLife() {

    barraLife.style.width = `${lifeValue}%`;

    if(lifeValue >= 70){
        barraLife.style.backgroundColor = 'green';
    }else if(lifeValue >=50){
        barraLife.style.backgroundColor = 'yellow';
    }else if(lifeValue >=20){
        barraLife.style.backgroundColor = 'orange';
    }else {
        barraLife.style.backgroundColor = 'red';
    }
}

let lifeInterval = setInterval(
    function() {
        lifeValue = lifeValue - 10;
        if(lifeValue <= 0){
            clearInterval(this);
            lifeValue = 0;
            imagenChange.src = './imagenes/fantasma.gif';
        }
        barLife();
    }, 4000)

buttonFood.addEventListener('click', lifeUp);

function lifeUp() {
    lifeValue = lifeValue + 15;
        if(lifeValue > 100) {
            lifeValue = 100;
    }
    barLife();
}

//Cambio de Imagen 

buttonSleep.addEventListener('click', imagenPlay);

function imagenPlay(){
    imagenChange.src = './imagenes/pluto-play.gif'
}

buttonFood.addEventListener('click', imagenFood);

function imagenFood(){
    imagenChange.src = './imagenes/pluto-eat.png'
}

