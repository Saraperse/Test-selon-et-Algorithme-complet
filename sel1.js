var random = Math.floor(Math.random() * 11);
console.log("Nombre arabe  : " + random);



var nombreRomain = "";

switch (random) {
    case 1:
        nombreRomain = nombreRomain + "I";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 2:
        nombreRomain = nombreRomain + "II";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 3:
        nombreRomain = nombreRomain + "III";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 4:
        nombreRomain = nombreRomain + "IV";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 5:
        nombreRomain = nombreRomain + "V";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 6:
        nombreRomain = nombreRomain + "VI";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 7:
        nombreRomain = nombreRomain + "VII";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 8:
        nombreRomain = nombreRomain + "VIII";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 9:
        nombreRoamin = nombreRomain + "IX";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    case 10:
        nombreRomain = nombreRomain + "X";
        console.log("Equivalent nombre romain : " + nombreRomain);
        break;
    default:
        console.log("Nombre non pris en compte");




        if (nombreRomain != "") {
          console.log("Equivalent nombre romain : " + nombreRomain);
        } else {
          console.log("Le nombre généré n'est pas compris entre 0 et 10");
        }

}