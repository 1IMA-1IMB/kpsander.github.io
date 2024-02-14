function byttEnheter() {
    let venstreEnhet = document.getElementById('venstre-enhet-input').value;
    let høyreEnhet = document.getElementById('rightValue').value;
    document.getElementById('venstre-enhet-input').value = høyreEnhet;
    document.getElementById('rightValue').value = venstreEnhet;
}

function kalkulerOgSjekk() {
    event.preventDefault();
    let venstreEnhet = document.getElementById('venstre-enhet-input').value;
    let høyreEnhet = document.getElementById('rightValue').value;
    let verdi = document.getElementById('leftValue').value;
    let resultat;
    if (venstreEnhet == 'gallon') {
        konverterGallon(verdi, høyreEnhet);
    } else if (venstreEnhet == 'cup') {
        konverterCup(verdi, høyreEnhet);
    } else if (venstreEnhet == 'liter'){
        konverterLiter(verdi, høyreEnhet);
    } else if (venstreEnhet == 'kubikkmeter') {
        konverterKubikkmeter(verdi, høyreEnhet);
    } else if (venstreEnhet == 'desiliter') {
        konverterDesiliter(verdi, høyreEnhet);
    } else {
        document.getElementById('output').innerHTML =  "slutt å tull a";
    } 
}

function konverterGallon(verdi, høyreEnhet) {
    let resultat;
    if (høyreEnhet == 'cup') {
        resultat = verdi * 16;
    } else if (høyreEnhet == 'liter') {
        resultat = verdi * 3.78541;
    } else if (høyreEnhet == 'kubikkmeter') {
        resultat = verdi * 0.00378541;
    } else if (høyreEnhet == 'desiliter') {
        resultat = verdi * 37.8541;
    } else {
        resultat = "Ugyldig enhet!";
    }
    document.getElementById('output').innerHTML = resultat;
}

function konverterCup(verdi, høyreEnhet) {
    let resultat;
    if (høyreEnhet == 'gallon') {
        resultat = verdi * 0.0625;
    } else if (høyreEnhet == 'liter') {
        resultat = verdi * 0.236588;
    } else if (høyreEnhet == 'kubikkmeter') {
        resultat = verdi * 0.000236588;
    } else if (høyreEnhet == 'desiliter') {
        resultat = verdi * 2.36588;
    } else {
        resultat = "Ugyldig enhet!";
    }
    document.getElementById('output').innerHTML = resultat;
}

function konverterLiter(verdi, høyreEnhet) {
    let resultat;
    if (høyreEnhet == 'gallon') {
        resultat = verdi * 0.264172;
    } else if (høyreEnhet == 'cup') {
        resultat = verdi * 4.22675;
    } else if (høyreEnhet == 'kubikkmeter') {
        resultat = verdi * 0.001;
    } else if (høyreEnhet == 'desiliter') {
        resultat = verdi * 10;
    } else {
        resultat = "Ugyldig enhet!";
    }
    document.getElementById('output').innerHTML = resultat;
}

function konverterKubikkmeter(verdi, høyreEnhet) {
    let resultat;
    if (høyreEnhet == 'gallon') {
        resultat = verdi * 264.172;
    } else if (høyreEnhet == 'cup') {
        resultat = verdi * 4226.75;
    } else if (høyreEnhet == 'liter') {
        resultat = verdi * 1000;
    } else if (høyreEnhet == 'desiliter') {
        resultat = verdi * 10000;
    } else {
        resultat = "Ugyldig enhet!";
    }
    document.getElementById('output').innerHTML = resultat;
}

function konverterDesiliter(verdi, høyreEnhet) {
    let resultat;
    if (høyreEnhet == 'gallon') {
        resultat = verdi * 0.0264172;
    } else if (høyreEnhet == 'cup') {
        resultat = verdi * 0.422675;
    } else if (høyreEnhet == 'liter') {
        resultat = verdi * 0.1;
    } else if (høyreEnhet == 'kubikkmeter') {
        resultat = verdi * 0.0001;
    } else {
        resultat = "Ugyldig enhet!";
    }
    document.getElementById('output').innerHTML = resultat;
}