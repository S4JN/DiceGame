document.querySelector("button").onclick = function ()

{

var RandomNumber1 = Math.floor(Math.random() * 6) +1 ;
var RandomNumber2 = Math.floor(Math.random() * 6) +1 ;

var RandomDiceImage = "images/dice"+RandomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", RandomDiceImage);


var RandomDiceImage2 = "images/dice"+RandomNumber2+".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", RandomDiceImage2);


if (RandomNumber1 > RandomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (RandomNumber1 < RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

document.querySelector("button").innerHTML ="Play Again"

}
