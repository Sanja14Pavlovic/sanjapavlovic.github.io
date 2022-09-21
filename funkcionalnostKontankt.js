let ime = document.getElementById('ime');
let prezime = document.getElementById('prezime');
let brojTelefona = document.getElementById('brojTelefona');
let naslov = document.getElementById('naslov');
let poruka = document.getElementById('poruka');
let tipPoruke = document.getElementById('tipPoruke');
let formaKontakt = document.getElementById('formaKontakt')
let greskaKontakt = document.getElementById('greskaKontakt');

formaKontakt.addEventListener('submit', function(e){
    let greske = [];
    
    if(ime.value === '' || ime.value == null){
        greske.push('Morate napisati ime');
    }
    if(prezime.value === '' || prezime.value == null){
        greske.push('Morate napisati prezime');
    }
    
    if(ime.value.trim().indexOf(' ') != -1) {
        greske.push('ime ne sme imati razmak');
    }
    if(prezime.value.trim().indexOf(' ') != -1) {
        greske.push('prezime ne sme imati razmak');
    }

    if(brojTelefona.value === '' || brojTelefona.value == null){
        greske.push('Morate napisati broj telefona');
    }
    if(brojTelefona.value.startsWith('+') && brojTelefona.value.length <= 1){
        greske.push('Morate napisati broj telefona');
    }

    console.log(brojTelefona.value.indexOf('+'));
    if(brojTelefona.value.indexOf('+') != 0){
        greske.push('broj mora poceti +');
    }
    console.log(poruka.value.length);
    if(poruka.value.length < 1 || poruka.value.length > 100){
        greske.push('Poruka je prazna ili predugacka');
    }

    if (greske.length > 0){
        e.preventDefault();
        greskaKontakt.innerHTML = greske.join(', ');
    }
    
});
