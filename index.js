let random = Math.random();
random = random*6;
random = Math.floor(random) +1 ;

let random2 = Math.random();
random2 = random2*6;
random2 = Math.floor(random2) +1 ;

if(random === 1){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice1.png");
}
else if(random === 2){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice2.png");
}
else if(random === 3){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice3.png");
}
else if(random === 4){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice4.png");
}
else if(random === 5){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice5.png");
}
else if(random === 6){
    document.getElementsByClassName("img1") [0].setAttribute("src" , "images/dice6.png");
}


if(random2 === 1){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice1.png");
}
else if(random2 === 2){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice2.png");
}
else if(random2 === 3){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice3.png");
}
else if(random2 === 4){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice4.png");
}
else if(random2 === 5){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice5.png");
}
else if(random2 === 6){
    document.getElementsByClassName("img2") [0].setAttribute("src" , "images/dice6.png");
}

if(random > random2){
    document.querySelector(".container h1").textContent = "Player1 is winner";
}
else if(random < random2){
    document.querySelector(".container h1").textContent = "Player2 is winner";
}
else{
    document.querySelector(".container h1").textContent = "Draw";
}
