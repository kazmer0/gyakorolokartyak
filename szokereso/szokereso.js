var szerbSzavak=[];
var magyarSzavak=[];
var duplikacioMennyiseg=0;
var joSzerbSzavak=[];
var joMagyarSzavak=[];
for (let i = 0; i < szerbSzavak.length; i++) {
    for (let j = i+1; j < szerbSzavak.length; j++){
        if(szerbSzavak[i]==szerbSzavak[j]){
            duplikacioMennyiseg++;
        }
    }}
var joSzavak=szerbSzavak.length-duplikacioMennyiseg; 
    
for (let i = 0; i < szerbSzavak.length; i++) {
    for (let j = i+1; j < szerbSzavak.length; j++) {
        
    if(szerbSzavak[i]==szerbSzavak[j]){

        szerbSzavak[j]=' ';
        joSzerbSzavak+="'"+szerbSzavak[i]+"',"
        if(szerbSzavak[i]==' '){

            break;
                
            }
    }
   
    }  
}
for (let i = 0; i < magyarSzavak.length; i++) { 
    for (let j = i+1; j <magyarSzavak.length; j++) {
        
    if(magyarSzavak[i]==magyarSzavak[j]){

        magyarSzavak[j]=' ';
        joMagyarSzavak+="'"+magyarSzavak[i]+"',"
        if(magyarSzavak[i]==' '){

        break;
            
        }
        
    }
   
    }  
}
console.log(joSzerbSzavak);
console.log(joMagyarSzavak);

var szokulonbseg= szerbSzavak.length-magyarSzavak.length;

if(szerbSzavak.length==magyarSzavak.length){
    console.log('ugyanannyi szo van');
}
if(szerbSzavak.length>magyarSzavak.length||szerbSzavak.length<magyarSzavak.length){
    console.log(szokulonbseg+' ertekkel kevesebb magyar szo van'+" ("+szerbSzavak.length+" szerb szo, es "+magyarSzavak.length+" magyar szo.")
    if(szokulonbseg<1){
        for (let i = 0; i < magyarSzavak.length; i++) {
            console.log(magyarSzavak[i]+" - "+szerbSzavak[i])
            
        }}
    if(szokulonbseg>1){
        for (let i = 0; i < szerbSzavakSzavak.length; i++) {
            console.log(szerbSzavak[i]+" - "+magyarSzavak[i])
            
        }}
    }
