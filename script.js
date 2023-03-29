function calcular (num) {
    document.querySelector(".put").innerHTML += num;
}

function clean() {
    document.querySelector(".put").innerHTML = "";
}

function backspace() {
    let visor = document.querySelector(".put").innerHTML;
    document.querySelector(".put").innerHTML = visor.substring(0, visor.length -1);

}