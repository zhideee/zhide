let button = document.getElementById("codeA");

button.onclick = function(){

    if (prompt("Gib hier deinen Code ein:") === "187") {
        window.location.href = "https://drive.google.com/uc?export=download&id=1-wB4OzGxpxaSodkbf15t1DjLowBMXUab";
    }
    else{
        alert("Dieser Code existiert nicht oder wurde falsch eingegeben!")
    }

}