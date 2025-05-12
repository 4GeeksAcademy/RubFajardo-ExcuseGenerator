import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['Batman ', 'Perry the Platypus ', 'My cat ', 'Ironman '];
let action = ['bit ', 'ate ', 'crushed ', 'stole '];
let what = ['my wallet ', 'my phone ', 'my car ', 'my laptop '];
let when = ['before work.', 'while I was exercising.', 'during my lunch.', 'while I was doing my homework.'];

function alltogether () {

  let whorandom = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let whatrandom = what[Math.floor(Math.random() * what.length)];
  let whenrandom = when[Math.floor(Math.random() * when.length)];
  
  return whorandom + randomaction + whatrandom + whenrandom;

}

  window.onload = function() {
  document.getElementById("excuse").innerText = alltogether();
  }