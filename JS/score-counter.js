// let Variable für veränderbaren Wert
let homeScore = 0;
let guestScore = 0;

// Funktion zum Tore hinzufügen
function addGoal(team) {
    if (team === 'home') {
        homeScore = homeScore + 1; // Erhöhe Wert um 1
        document.getElementById('score-home').innerText = homeScore; // innertext weil in <div>
    } else {
        guestScore = guestScore + 1;
        document.getElementById('score-guest').innerText = guestScore;
    }
}

// Funktion zum Zurücksetzen
function resetScore() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('score-home').innerText = 0;
    document.getElementById('score-guest').innerText = 0;
}