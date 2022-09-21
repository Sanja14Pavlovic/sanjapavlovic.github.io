let dnoKartice = document.getElementsByClassName('card-footer');
let kartica = document.getElementsByClassName('kartice');
let dugme = document.createElement('button');
dugme.innerHTML = "Kupi odmah";
let telo = document.getElementById('telo');

dugme.classList.add("btn-btnm" ,"btn-primary" ,"btn-lg", "my-2");
dugme.addEventListener("click", () => {
    location.href = "Demo.html"
});

kartica[0].addEventListener("mouseover", function() {
    dnoKartice[0].appendChild(dugme);
});
kartica[1].addEventListener("mouseover", function() {
    dnoKartice[1].appendChild(dugme);
});
kartica[2].addEventListener("mouseover", function() {
    dnoKartice[2].appendChild(dugme);
});

kartica[0].addEventListener("mouseleave", function() {
    dnoKartice[0].innerHTML = "";
});
kartica[1].addEventListener("mouseleave", function() {
    dnoKartice[1].innerHTML = "";
});
kartica[2].addEventListener("mouseleave", function() {
    dnoKartice[2].innerHTML = "";
});