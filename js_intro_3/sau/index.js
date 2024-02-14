let sauer = 100;

function print(){
    if (sauer >= 2){
        document.getElementById("antall").innerHTML = "Du har " + sauer + " sauer igjen før du sovner!";
    }
    else if (sauer >= 1){
        document.getElementById("antall").innerHTML = "Du har " + sauer + " sau igjen før du sovner!";
    }
    else{
        document.getElementById("antall").innerHTML = "ZZzzZZZzZZZzZzzzzZzZZZ";
    }
}

function update(){
    print();
}
function minus1(){
    sauer -= 1;
    print();
}
function reset(){
    sauer = 100;
    print();
}
function inputValue(){
    sauer -= document.getElementById("customNumber").value;
    print();
}




let tider = [

]