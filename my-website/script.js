let startTime;
let score = 0;
let highScore = 0;

function startGame(){
    let box = document.getElementById("box");
    box.style.display = "block";
    moveBox();
    startTime = new Date().getTime();
}

function moveBox(){
    let box = document.getElementById("box");
    let x = Math.random() * 300;
    let y = Math.random() * 300;

    box.style.position = "relative";
    box.style.left = x + "px";
    box.style.top = y + "px";
}

document.getElementById("box").onclick = function(){
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime)/1000;

    score++;

    if(score > highScore){
        highScore = score;
    }

    alert(
        "⚡ Time: " + timeTaken + " sec\n" +
        "🔥 Score: " + score + "\n" +
        "🏆 High Score: " + highScore
    );

    moveBox();
    startTime = new Date().getTime();
}document.getElementById("score").innerText = score;
document.getElementById("high").innerText = highScore;