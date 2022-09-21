let btcWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let ethWs = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let batWs = new WebSocket('wss://stream.binance.com:9443/ws/batusdt@trade');

let akcijaBtcElement = document.getElementById('akcijaBtc');
let akcijaEthElement = document.getElementById('akcijaEth');
let akcijaBatElement = document.getElementById('akcijaBat');


let imaBat = 0;
let imaEth = 0;
let imaBtc = 0;

let batVrednost = document.getElementById('batVrednost');
let ethVrednost = document.getElementById('ethVrednost');
let btcVrednost = document.getElementById('btcVrednost');



btcWs.onmessage = (event) => {
    let akcijaBtc = JSON.parse(event.data);
    console.log(akcijaBtc);
    akcijaBtcElement.innerText = parseFloat(akcijaBtc.p);
    if (imaBtc > 0){
        let vredi = imaBtc * parseFloat(akcijaBtc.p);
        btcVrednost.innerHTML = vredi.toFixed(1);
    }
}

ethWs.onmessage = (event) => {
    let akcijaEth = JSON.parse(event.data);
    console.log(akcijaEth);
    akcijaEthElement.innerText = parseFloat(akcijaEth.p);
    if (imaEth > 0){
        let vredi = imaEth * parseFloat(akcijaEth.p);
        ethVrednost.innerHTML = vredi.toFixed(2);
    }
}

batWs.onmessage = (event) => {
    let akcijaBat = JSON.parse(event.data);
    console.log(akcijaBat);
    akcijaBatElement.innerText = parseFloat(akcijaBat.p).toFixed(3);
    if (imaBat > 0) {
        let vredi = imaBat * parseFloat(akcijaBat.p);
        batVrednost.innerHTML = vredi.toFixed(3);
    }
}

let dugmeZaKupovinu = document.getElementById('kupiCrypto');
let kolicinaCrypta = document.getElementById('Crypto');
let tipCrypta = document.getElementById('tipCrypta');
let greskaElement = document.getElementById('greskaDemo');

let btcNovcanik = document.getElementById('btc');
let ethNovcanik = document.getElementById('eth');
let batNovcanik = document.getElementById('bat');


dugmeZaKupovinu.addEventListener('click', () => {
    let greske = [];
    console.log('koliko je kupljeno ' + parseFloat(kolicinaCrypta.value));
    
    console.log('koliko 1 kosta ' + parseFloat(akcijaBatElement.innerText));
    console.log('koliko je ukupna cena ' + kolicinaCrypta.value * parseFloat(akcijaBatElement.innerText));
    console.log(tipCrypta.value);
    if(kolicinaCrypta.value > 0){    
        if (tipCrypta.value === 'bat'){
            console.log('uspelo je za bat');
            let kolikoDodati = parseFloat(kolicinaCrypta.value);
            let kolikoIma = parseFloat(batNovcanik.innerText);
            
            if(!kolikoIma){
                kolikoIma = 0;
            } else {
                kolikoIma = parseFloat(batNovcanik.innerText);
            }
            
            batNovcanik.innerHTML =  kolikoDodati + kolikoIma;
            console.log(parseFloat(batNovcanik.value));
            imaBat = kolikoDodati + kolikoIma;
        }
        if (tipCrypta.value === 'eth'){
            console.log('uspelo je za eth');
            let kolikoDodati = parseFloat(kolicinaCrypta.value);
            let kolikoIma = parseFloat(ethNovcanik.innerText);
            
            if(!kolikoIma){
                kolikoIma = 0;
            } else {
                kolikoIma = parseFloat(ethNovcanik.innerText);
            }
            console.log(kolikoIma);
            ethNovcanik.innerHTML =  kolikoDodati + kolikoIma;
            imaEth = kolikoDodati + kolikoIma;
        }
        if (tipCrypta.value === 'btc'){
            console.log('uspelo je za btc');
            let kolikoDodati = parseFloat(kolicinaCrypta.value);
            let kolikoIma = parseFloat(btcNovcanik.innerText);
            
            if(!kolikoIma){
                kolikoIma = 0;
            } else {
                kolikoIma = parseFloat(btcNovcanik.innerText);
            }
            console.log(kolikoIma);
            btcNovcanik.innerHTML =  kolikoDodati + kolikoIma;
            imaBtc = kolikoDodati + kolikoIma;
        }
    } else {
        console.log('nesto')
        greske.push('broj akcija ne moze biti 0 ili manji')
        greskaElement.innerHTML = greske.join(', ');
    }
})