//fonction qui permet de convertir de l'euros en dollar


var euros = 150;
var constant = 1.22;
var resultat = 0;

makeConvert(euros, constant);

function makeConvert(euros, constant) {
    resultat = (euros*constant);
    console.log(resultat);

}