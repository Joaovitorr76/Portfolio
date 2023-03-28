const audio = new Audio("musicas/gta-san-andreas.mp3")
var jform = document.getElementById("jform")
var clicked = true;

jform.addEventListener("click", ()=> {
    if (clicked == true) {
        audio.play()
        clicked = false;
    } else {
        audio.pause()
        clicked = true;
    }
})

