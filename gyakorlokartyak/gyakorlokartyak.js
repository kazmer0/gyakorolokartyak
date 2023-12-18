let szerbSzavak=['mi' ,'vi' ,'oni' ,'šta' ,'ko' ,'gde' ,'zašto' ,'kako' ,'koji' ,'kada' ,'onda' ,'ako' ,'strašno' ,'ali' ,'zato' ,'ne' ,'ovo' ,'to' ,'svi' ,'ili' ,'i' ,'znati' ,'Znam' ,'misliti' ,'doći' ,'staviti','uzeti','naći','slušati','raditi','pričati','dati','pomoći','voleti','pozvati','čekati','nula','jedan','dva','tri','četiri','pet','šest','sedam','osam','devet','deset','sto','stolica','boja','zvuk','miris','ukus','dodir','osećaj','misao','reč','jezik','pismo','broj','matematika','nauka','umetnost','muzika','slika','film','pozorište','igra','sport','fudbal','košarka','tenis','plivanje','šetnja','trčanje','biciklizam','putovanje','odmor','rad','posao','novac','cena','prodaja','kupovina','trgovina','hrana','piće','voće','povrće','meso','riba','hleb','sir','jaja','mleko','ulje','so','biber','šećer','kafa','voda','vrata'];


let magyarSzavak=['mi', 'ti', 'ők', 'mi?', 'ki?', 'hol?', 'miért?', 'hogyan?', 'melyik?', 'mikor?', 'akkor', 'ha', 'szörnyű', 'de', 'ezért', 'nem', 'ez', 'az', 'minden', 'vagy', 'és' , 'tudni', 'tudom', 'gondolkozni', 'jönni', 'tenni', 'venni', 'találni', 'hallgatni', 'dolgozni', 'beszélni', 'adni', 'segíteni', 'szeretni', 'hívni', 'várni', 'nulla', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc','tíz','asztal','szék','szín','hang','illat','íz','érintés','érzés','gondolat','szó','nyelv','írás','szám','matematika','tudomány','művészet','zene','kép','film','színház','játék','sport','labdarúgás','kosárlabda','tenisz','úszás','séta','futás','kerékpározás','utazás','pihenés','munka','állás','pénz','ár','eladás','vásárlás','kereskedelem','étel','ital','gyümölcs','zöldség','hús','hal','kenyér','sajt','tojás','tej','olaj','só','bors','cukor','kávé','víz','ajtó']
var card0 = document.getElementById("kartya0");
var card1 = document.getElementById("kartya1");
var card2 = document.getElementById("kartya2");
var card3 = document.getElementById("kartya3");
var card4 = document.getElementById("kartya4");
var nemTudomGomb = document.getElementById("nemTudom");
var kartya0forditva=false;
var kartya1forditva=false;
var kartya2forditva=false;
var kartya3forditva=false;
var kartya4forditva=false;
var pontok=0;   

function randomszamgenerator(legnagyobbSzam=szerbSzavak.length-1)
{
var szam=Math.random()*legnagyobbSzam;
szam=Math.round(szam)
return szam;
}
function randomkartyagenerator(legnagyobbkartya=4){
    var kartya=Math.random()*legnagyobbkartya;
    kartya=Math.round(kartya)
    return kartya;
    }

var randomszam0=randomszamgenerator();
var randomszam1=randomszamgenerator();
var randomszam2=randomszamgenerator();
var randomszam3=randomszamgenerator();
var randomszam4=randomszamgenerator();

function kiosztas(){
document.getElementById('tipp').value='';
if(randomszam0==randomszam1||randomszam0==randomszam2||randomszam0==randomszam3||randomszam0==randomszam4){
    randomszam0++;
    if(randomszam0>szerbSzavak.length){
        randomszam0-=2;
    if(randomszam1<0){
        randomszam1+=3
    }
    }

}
if(randomszam1==randomszam2||randomszam1==randomszam3||randomszam1==randomszam4){
    randomszam1++;
    if(randomszam0>szerbSzavak.length){
        randomszam1-=2;
        if(randomszam2<0){
            randomszam2+=3
        }
    }
}
if(randomszam2==randomszam3||randomszam2==randomszam4){
    randomszam2++;
    if(randomszam0>szerbSzavak.length){
        randomszam2-=2;
        if(randomszam3<0){
            randomszam3+=3
        }
    }
}
if(randomszam3==randomszam4){
    randomszam3++;
    if(randomszam0>szerbSzavak.length){
        randomszam3-=2;
        if(randomszam4<0){
            randomszam4+=3
        }
    }
}

document.getElementById('szerbszoveg0').innerHTML=szerbSzavak[randomszam0];
document.getElementById('szerbszoveg1').innerHTML=szerbSzavak[randomszam1];
document.getElementById('szerbszoveg2').innerHTML=szerbSzavak[randomszam2];
document.getElementById('szerbszoveg3').innerHTML=szerbSzavak[randomszam3];
document.getElementById('szerbszoveg4').innerHTML=szerbSzavak[randomszam4];



document.getElementById('magyarszoveg0').innerHTML=magyarSzavak[randomszam0];
document.getElementById('magyarszoveg1').innerHTML=magyarSzavak[randomszam1];
document.getElementById('magyarszoveg2').innerHTML=magyarSzavak[randomszam2];
document.getElementById('magyarszoveg3').innerHTML=magyarSzavak[randomszam3];
document.getElementById('magyarszoveg4').innerHTML=magyarSzavak[randomszam4];
card0.style.background="#2d767f"
card1.style.background="#2d767f"
card2.style.background="#2d767f"
card3.style.background="#2d767f"
card4.style.background="#2d767f"
}

kiosztas();

function kartyacsere(){
    if(kartya0forditva==true){
        card0.classList.toggle("forditas");}
    if(kartya1forditva==true){
        card1.classList.toggle("forditas");}
    if(kartya2forditva==true){
        card2.classList.toggle("forditas");}
    if(kartya3forditva==true){
        card3.classList.toggle("forditas");}
    if(kartya4forditva==true){
        card4.classList.toggle("forditas");}

    kartya0forditva=false;
    kartya1forditva=false;
    kartya2forditva=false;
    kartya3forditva=false;
    kartya4forditva=false;

kartya=randomkartyagenerator();
randomszam0=randomszamgenerator();
randomszam1=randomszamgenerator();
randomszam2=randomszamgenerator();
randomszam3=randomszamgenerator();
randomszam4=randomszamgenerator();

kiosztas();

nemTudomGomb.disabled= false;
document.getElementById('tipp').value='';
}

function oke(){
const tipp=document.getElementById('tipp').value;
const magyarszoveg0tipp=document.getElementById('magyarszoveg0').textContent;
const magyarszoveg1tipp=document.getElementById('magyarszoveg1').textContent;
const magyarszoveg2tipp=document.getElementById('magyarszoveg2').textContent;
const magyarszoveg3tipp=document.getElementById('magyarszoveg3').textContent;
const magyarszoveg4tipp=document.getElementById('magyarszoveg4').textContent;

    if(tipp===magyarszoveg0tipp&&kartya0forditva==false){
        pontok++;
        document.getElementById('pontok').innerHTML=pontok;
        document.getElementById('tipp').value="";
        card0.classList.toggle("forditas");
        card0.style.background= 'rgb(45, 127, 60)' ;
        kartya0forditva=true;
}
    if(tipp===magyarszoveg1tipp&&kartya1forditva==false){ 
        pontok++;
        document.getElementById('pontok').innerHTML=pontok;
        document.getElementById('tipp').value="";
        card1.classList.toggle("forditas");
        card1.style.background= 'rgb(45, 127, 60)' ;
        kartya1forditva=true;
    }
    if(tipp===magyarszoveg2tipp&&kartya2forditva==false){ 
        pontok++;
        document.getElementById('pontok').innerHTML=pontok;
        document.getElementById('tipp').value="";
        card2.classList.toggle("forditas");
        card2.style.background= 'rgb(45, 127, 60)' ;
        kartya2forditva=true;

    }
    if(tipp===magyarszoveg3tipp&&kartya3forditva==false){
        pontok++;
        document.getElementById('pontok').innerHTML=pontok;
        document.getElementById('tipp').value="";
        card3.classList.toggle("forditas");
        card3.style.background= 'rgb(45, 127, 60)' ;
        kartya3forditva=true;

    }
    if(tipp===magyarszoveg4tipp&&kartya4forditva==false){
        pontok++;
        document.getElementById('pontok').innerHTML=pontok;
        document.getElementById('tipp').value="";
        card4.classList.toggle("forditas");
        card4.style.background= 'rgb(45, 127, 60)' ;
        kartya4forditva=true;
 }}
  
function nemTudom(){
        if(kartya0forditva===false){
            card0.style.background='#7f2d2d';
            card0.classList.toggle("forditas");
            kartya0forditva=true;
        }
        if(kartya1forditva===false){
            card1.style.background='#7f2d2d';
            card1.classList.toggle("forditas");
            kartya1forditva=true;
        }
        if(kartya2forditva===false){
            card2.style.background='#7f2d2d';
            card2.classList.toggle("forditas");
            kartya2forditva=true;
        }
        if(kartya3forditva===false){
            card3.style.background='#7f2d2d';
            card3.classList.toggle("forditas");
            kartya3forditva=true;
        }
        if(kartya4forditva===false){
            card4.style.background='#7f2d2d';
            card4.classList.toggle("forditas");
            kartya4forditva=true;
        }
        nemTudomGomb.disabled = true;
    }
    document.addEventListener("keydown", function(event) {
        switch (event.keyCode) {
          case 13: 
            oke();
            break;
          case 17: 
            nemTudom();
            break;
          case 18: 
            kartyacsere();
            break;
        }
      });