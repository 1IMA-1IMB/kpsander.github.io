let check1 = false;
let check2 = false;

function check_1() {
    check1 = !check1; 
}

function check_2() {
    check2 = !check2; 
}

function duck_checker() {
    if (check2 && check1) {
        alert("Then it's a Duck");
    } else {
        alert("It is not a duck");
    }
}
