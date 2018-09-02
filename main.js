'use strict'

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let secondsDegrees;

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function handleTransition() {
  if (secondsDegrees === 0) {
    secondHand.style.transition = `all 0s`;
  } else {
    secondHand.style.transition = `all 0.05s`;
  }
}

setInterval(setDate, 1000);
secondHand.addEventListener('transitionend', handleTransition);