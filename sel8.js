var readline = require("readline-sync");
constanteTva = 20;
var menu = "";
console.log("Voici la liste des produits : ");
var choix = 0;

var TTC = 0;
var HT;

menu = "1. TV : 400 euros\n";
menu += "2. ordinateur : 700 euros\n";
menu += "3. Telephone : 200 euros\n";
menu += "4. Portable : 900 euros\n";
console.log(menu);

do {
  var choix = readline.questionInt("Quel produit voulez-vous achetez ? de 1 a 4 : ");
  console.log(choix);
} while (choix < 1 || choix > 4);



var nombreProduit = 0;

do {
  nombreProduit = readline.questionInt("Combien de produits voulez-vous ?");
  console.log(nombreProduit);
} while (nombreProduit < 0);

switch (choix) {
  case 1:
    HT = 400 * nombreProduit;
    TTC = HT + HT * constanteTva / 100;

    console.log("Total HT : " + HT + "euros");
    console.log("Total TTC : " + TTC + "euros");
    
    break;

case 2 :
HT = 700 * nombreProduit;
TTC = HT + HT * constanteTva / 100;

console.log("Total HT : " + HT + "euros");
console.log("Total TTC : " + TTC + "euros");

break;
case 3 :
    HT = 200 * nombreProduit;
    TTC = HT + HT * constanteTva / 100;

    console.log("Total HT : " + HT + "euros");
    console.log("Total TTC : " + TTC + "euros");
    
    break;
    case 4 :
    HT = 900 * nombreProduit;
    TTC = HT + HT * constanteTva / 100;

    console.log("Total HT : " + HT + "euros");
    console.log("Total TTC : " + TTC + "euros");
    
    break;
    default : console.log("Produit inexistant. Recommencez ! ")
}
