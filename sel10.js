var readline = require("readline-sync");

var annee = readline.questionInt("Quel annee cherchez-vous? :  ");
var mois = readline.question("Quel mois cherchez-vous? :  ");
var nbJoursMois = nbJoursMois (mois);


estBissextile(annee);
nbJoursMois(mois,annee);

function estBissextile (annee){
    return ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0)
}




function nbJoursMois (mois, annee){
    switch (mois) {
        case "Janvier": return 31;
            break;
        case "Fevrier": 
            if (estBissextile(annee)) {
                return 29;
            } else {
                return 28;
            }
            break;
        case "Mars": return 31;
            break;
        case "Avril": return 30;
            break;
        case "Mai": return 31;
        break;
        case "Juin":
            return 30;
            break;
        case "Juillet":
            return 31;
            break;
        case "août":
            return 31;
            break;
        case "Septembre":
            return 30;
            break;
        case "Octobre":
            return 31;
            break;
        case "Novembre":
            return 30;
            break;
        case "Decembre":
            return 31;
            break;
        default:
            return 0;


    }
}

 if (nbJoursMois !=0){
    console.log(nbJoursMois + " jours en " + mois  + " " + annee)
    }else{
       console.log("Le mois n'est pas pris en compte")
    }




