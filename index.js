function add(n, m) {
  return n+m;
}
function multiply(n, m){
  return n*m;
}
function subtract(n, m){
  return n-m;
}
function divide(n,m){
  return n/m;
}
function calculator(n, m, operator){
  return operator(n, m);
}
//이런 것도 가능한 줄 몰랐네

console.log(this);

var houseKeeper1={
  yearsOfExperience: 12,
  name: "Ariana",
  cleaningRepertoire: ["bathroom", "lobby", "bedrrom"]
}

function pickUpSuitCase() {
  alert("Taking Suitcase");
}

function move() {
  alert("Moving");
}

function bellboy(name, age, language) {
  this.name = name;
  this.age = age;
  this.language = language;
  this.moveSuitcase= function() {
    alert("May I take your suitcase?");
    pickUpSuitCase();
    move();
  }
}

function houseKeeper (yearsOfExperience, name, cleaningRepertoire){
  this.yearsOfExperience= yearsOfExperience;
  this.name= name;
  this.cleaningRepertoire= cleaningRepertoire;
}

var houseKeeper2= new houseKeeper(1,Anjali,[MyRoom]);
