let button = document.getElementById("codeA");

button.onclick = function(){

    var input = prompt("Gib hier deinen Code ein:") 

    if (input === "ygc") {
        window.location.href = "https://drive.google.com/uc?export=download&id=1-wB4OzGxpxaSodkbf15t1DjLowBMXUab";
    }
    else{
        if (input === "187") {
            document.getElementById("nggyu").play();
        }
        else{
            if(input === "paypal"){
                window.location.href = "https://paypal.me/zhideee";
            }
            else{
                alert("Dieser Code existiert nicht oder wurde falsch eingegeben!");
            }
        }
    }
}
