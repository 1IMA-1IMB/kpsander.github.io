let fornavn = 'Sander';
let alder = 16;
let svarString = ''

console.log('Hei', fornavn, 'du er', alder, 'år gammel');

let erEnElev = true;
if (!erEnElev) {
    console.log( 'Du er ikke en elev!');
}else{
    console.log('Du er en elev!')
}

function kalkulator() {
    console.log(2 + 2)
}

kalkulator();

function kalkulator2() {
    for (let number = 0; number > 1; number = number - 1) {
        11 * number;
        console.log(number)
    }
}

kalkulator2();

function kalkulator3() {
    console.log(11 * 1)
    console.log(11 * 2)
    console.log(11 * 3)
    console.log(11 * 4)
    console.log(11 * 5)
    console.log(11 * 6)
    console.log(11 * 7)
    console.log(11 * 8)
    console.log(11 * 9)
    console.log(11 * 10)
    console.log(11 * 11)
}

kalkulator3();


let tall1 = 100;
let tall2 = 101;

function kalkulator4() {
    console.log(tall1 * tall2)
}

function kalkulator4() {
    if (result > 40) {
        svarString = "Alvorlig fedme"
    }
    else if (result < 39 && result > 33) {
        resultat = 7;
        svarString = "Fedme"
    }
    else if (result < 32 && result > 26) {
        svarString = "Overvektig"
    }
    else if (result < 25 && result > 18.5) {
        svarString = "Normal vekt"
    }
    else if (result < 18.4 && result > 17) {
        svarString = "Undervekt grad 1 (smålig undervekt)"
    }
    else if (result < 16.9 && result > 16) {
        svarString = "Undervekt grad 2(svært undervekt)"
    }
    else{
        svarString = "Undervekt grad 3(alvorlig undervekt)"
    }
    document.getElementById("bmiSvar").innerHTML = `${svarString}`
}


function processForm() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    tHeight = height ** 2;
    result = weight / tHeight * 10000;
    kalkulator4()
}