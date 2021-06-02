var readline = require("readline-sync");
var nb1 = Math.floor(Math.random ()*101);
var nb2 = Math.floor(Math.random ()*101);
var operation = Math.floor(Math.random ()*4 + 1);
var bonneReponse = 0;
var reponseFournie = "" ;


console.log("Qual est le resultat du calcul suivant ? ")
   
       switch (operation) {
        case 1 : console.log(nb1+ "+" + nb2 + " = ");
        bonneReponse = nb1+nb2;
        break;
    
           case 2 : console.log(nb1+ "-" + nb2 + " = ");
        bonneReponse = nb1-nb2;
        break;
    
        case 3 : console.log(nb1+ "*" + nb2 + " = ");
        bonneReponse = nb1 * nb2;
        break;
    
        case 4 : console.log(nb1+ "%" + nb2 + " = ");
        bonneReponse = nb1 % nb2;
        break;
      
   
    }  
    do {
        reponseFournie = readline.questionInt("Quelle est votre reponse ?");
    console.log( reponseFournie);
}while (reponseFournie !==bonneReponse);

    
if (reponseFournie !==bonneReponse){
    console.log("Mauvaise reponse ! ")
}else {
    console.log("Bonne reponse. Felicitation ! ")
}






   




