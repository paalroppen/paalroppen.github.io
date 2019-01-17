var antallKm = document.getElementById("antallKM");
var antallKr;
var pers = ["Pål", "Henrik", "Fortolf", "Thomas", "Randi"]
var personer = ["Simon Lexell", "Thor Christian", "Martin Svestad", "Liam Young", "Dan Bilzerian"];
var anmeldelser = ["denne siden er fantastisk!", "kjøregodtgjørelse har gjort livet mitt mye enklere!", "10/10", "denne siden er ikke så bra.", "helt ok hjelpemiddel."];
const bil = document.getElementById("bil");
const motorsykkel = document.getElementById("motorsykkel");
const elbil = document.getElementById("elbil");
const Resultat = document.getElementById("Resultat");
const btnAM = document.getElementById("btnAM");
const annMeld = document.getElementById("annMeld");
const tern = document.getElementById("tern");


function svar(){
    if (bil.checked) {
        antallKr=antallKm.value*5;
        var tekst = "Etter å ha kjørt " + antallKm.value + "km i " + "bil" + " har du krav på " + antallKr + "kr";
        Resultat.innerHTML=tekst;
    }
    if (motorsykkel.checked) {
        antallKr=antallKm.value*3;
        var tekst = "Etter å ha kjørt " + antallKm.value + "km i " + "MC" + " har du krav på " + antallKr + "kr";
        Resultat.innerHTML=tekst;
    }
    if (elbil.checked) {
        antallKr=antallKm.value*7;
        var tekst = "Etter å ha kjørt " + antallKm.value + "km i " + "el-bil" + " har du krav på " + antallKr + "kr";
        Resultat.innerHTML=tekst;
    }

}

function anmeld(){
    var tall1 = Math.random()*5;
    var tall2 = Math.random()*5;
    var pers = personer[Math.floor(tall1)];
    var anmeld = anmeldelser[Math.floor(tall2)];
    annMeld.innerHTML=pers + " mener følgende om siden: " + anmeld;

}

btnAM.onclick = anmeld;

for(var i=0;i<=4;i++){
    let terning = Math.floor(Math.random()*6)+1;
    tern.innerHTML+=(pers[i] + " ga terningkast " + Math.floor(terning))+ '<br>';

}

