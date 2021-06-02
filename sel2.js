var readline = require("readline-sync");

var motSalut = "";




do {
    saisie = readline.question("Choisir la langue  : AL / EN / ES / PO / IT  : " );
}
while ( saisie !== "AL" && saisie !=="EN" && saisie !=="ES" && saisie!=="PO" && saisie !=="IT")


    switch (saisie) {
     
        case "AL" : 
        console.log("Hallo");
        break;
        case "EN" : 
        console.log("Hello");
        break;
        case "ES" : 
        console.log("Buenos dias");
        break;
        case "PO" : 
       console.log("OLa");
       break; 
       case "IT" : 
       console.log("Buongiorno");
       break; 
       default :  console.log("Langue non pris en compte");
    }
    

   



