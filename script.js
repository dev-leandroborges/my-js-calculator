function insert (num) {
    document.querySelector(".put").innerHTML += num;
}

function clean() {
    document.querySelector(".put").innerHTML = "";
}

function backspace() {
    let visor = document.querySelector(".put").innerHTML;
    document.querySelector(".put").innerHTML = visor.substring(0, visor.length -1);

}

function compute() {
    let visor = document.querySelector(".put").innerHTML;
    if (visor) {
        document.querySelector(".put").innerHTML = eval(visor);
    }else {
        document.querySelector(".put").innerHTML = "Nenhum valor";
    }
}