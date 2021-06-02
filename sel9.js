function estBissextile(annee){
    return ((annee%4===0 && annee%100 !=0)|| annee%400 ===0)

}

function affiageAnneBissextile(annee){
    var msg = annee + " est une annee";
    if (! estBissextile(annee)){
        msg = msg + " non Bissextile";

    }else{
        msg = msg + " Bissextile";
    } console.log(msg);
}

affiageAnneBissextile(2000)
affiageAnneBissextile(2020)
affiageAnneBissextile(1900)