let number = document.getElementById("is-integer");
let isNan = document.getElementById("is-nan");
let float = document.getElementById("parse-float").innerHTML.split(" ");
let int = document.getElementById("parse-int");
let tofix = document.getElementById("to-fixed");


if(Number.isInteger(number.innerHTML)){
    number.innerHTML += " ==> est un nombre entier"
}else {
    number.innerHTML += " ==> n'est pas un nombre entier"
}

if(isNaN(parseInt(isNan.innerHTML))){
    isNan.innerHTML += " ==> est NaN ( Not a Number )"
}else {
    isNan.innerHTML += " ==> est un nombre"
}

let newNumber = float[0] *= 19;
float.shift();
float.unshift(newNumber);
float = float.join(" ");

document.getElementById("parse-float").innerHTML = float;

int.innerHTML = parseInt(int.innerHTML) * 19 + "px";

tofix.innerHTML = parseFloat(tofix.innerHTML).toPrecision(4);