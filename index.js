var randomNumber1 =Math.floor(Math.random()* 6+1);
var randomNumber2 =Math.floor(Math.random()* 6+1);

document.getElementById("imageid1").src='images/dice'+randomNumber1+'.png';
document.getElementById("imageid2").setAttribute("src", 'images/dice'+randomNumber2+'.png');


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 won";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 won";
}else{
  document.querySelector("h1").innerHTML = "Refresh Me";
}
