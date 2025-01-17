function button(letter) {
    var audio = document.getElementById("audio");
    var iconBtn = document.getElementById("icon-btn");
    
    if(letter == 'A') audio.src = "sound/apple.mp3";

    else if(letter == 'B') audio.src =   "sound/ball.mp3";

    else if(letter == 'C') audio.src = "sound/cat.mp3";

    else  alert("not found")
    audio.play();
    iconBtn.style.color = "black";
    setTimeout(function(){
        iconBtn.style.color = '#a09e9e';
    },1200)
}
