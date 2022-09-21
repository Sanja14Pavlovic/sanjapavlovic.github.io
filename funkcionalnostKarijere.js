let ime = document.getElementById('ime');
let prezime = document.getElementById('prezime');
let fajl = document.getElementById('fajl');
let formaKarijere = document.getElementById('formaKarijere');
let greskePrikaz = document.getElementById('greska');

console.log(formaKarijere);
formaKarijere.addEventListener('submit', function(e) {
    let greske = [];
    
    if(ime.value === '' || ime.value == null){
        greske.push('Morate uneti ime');
    }
    if(prezime.value === '' || prezime.value == null){
        greske.push('Morate uneti prezime');
    }
    if(fajl.value === ''  || fajl.value == null){
        greske.push('Morate ubaciti Vas CV');
    }
    if (greske.length > 0){
        e.preventDefault();
        greskePrikaz.innerHTML = greske.join(', ');
    }
});