let kartica = document.getElementsByClassName('card');
let textKatrice = document.getElementsByClassName('card-text');

kartica[0].addEventListener("mouseover", function(){
    textKatrice[0].innerHTML = "Ja sam Marko Jovanovic jedan od clanova tima koji se bavi kreiranjem CryptoWorld projekta. Ja i moje kolege smo jako motivisane i trudimo se da napravimo sto bolji sajt za nase korisnike";
});
kartica[1].addEventListener("mouseover", function(){
    textKatrice[1].innerHTML = "Ja sam Akira Randjelovic i ove godine sam dobio tutulu radnika godine jer sam se trudio i bio najbolji radnik od skih ostalih radnika";
});
kartica[2].addEventListener("mouseover", function(){
    textKatrice[2].innerHTML = "Ja sam Sanja Pavlovic i radim za firmu CryptoWorld i jako sam zadovoljna sa nasim uspehom u tako kratkom vremenu";
});

kartica[0].addEventListener("mouseout", function(){
    textKatrice[0].innerHTML = "";
});
kartica[1].addEventListener("mouseout", function(){
    textKatrice[1].innerHTML = "";
});
kartica[2].addEventListener("mouseout", function(){
    textKatrice[2].innerHTML = "";
});


