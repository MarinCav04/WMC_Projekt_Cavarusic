const meinformular = document.getElementById('registration');
meinformular.onsubmit = function(event) {
    // verhinder neues laden der Seite
    event.preventDefault();

    let team = document.getElementById('teamname').value;
    let email = document.getElementById('email').value;

    // prüft ob teamname leer steht
    if (team == "") {
        alert("Bitte Teamnamen eingeben!")
        return;
    }
    // prüft ob ein @ in der mail steht
    if (email.includes("@") == false) {
        alert("Geben Sie eine richtige E-Mail Adresse ein!")
        return;
    }
    alert("Dein Team wurde erfolgreich angemeldet");
    // löschen der Daten beim absenden
    meinformular.reset();
};
