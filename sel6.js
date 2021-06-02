const Dollar = 1.22;
const Roubles = 19.14;
const yuanns = 7.89;
const Livres = 0.89;
var choix = 0;
var devise = "";
var txt = "";
var readline = require("readline-sync");
choix= readline.questionFloat("Saisir la somme en euro a convertir  : ");
console.log("*******************");
afficherMenuDevise();

do{
    devise = readline.question("Saisir la devise souhaitee : ");
    switch(devise){
        case "$" :
        case "Dollar": valeurConvertie = choix * Dollar;
        break;
        case "Roubles": valeurConvertie = choix * Roubles;
        break;
        case "yuanns": valeurConvertie = choix * yuanns;
        break;
        case "Livres": valeurConvertie = choix * Livres;
        break;
    }
}while( choix === 0);

console.log( choix + "€ : " + valeurConvertie + " " + devise )



function afficherMenuDevise(){    
        var txt = "********************\n";
        txt = txt + "$ ou Dollar (US)\n";
        txt = txt + "Roubles ( Russie)\n";
        txt = txt + "Yuanns \n";
        txt = txt + "Livres \n";
        console.log(txt);
    } 
   
    
   

