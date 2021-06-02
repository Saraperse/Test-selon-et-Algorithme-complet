var readline = require("readline-sync");
var tailleCarre = readline.questionInt("quelle taille ? ");

var grandLigne = "";
for ( var i = 1; i<=tailleCarre; i= i+ 1){   
    grandLigne = grandLigne + "**";
  
   
 }

var petitLigne = "";
for (var j=1; j<=tailleCarre; j = j+ 1){
    if (j === 1 || j === tailleCarre){
        petitLigne = petitLigne + "**";

    }else { 
        petitLigne = petitLigne + "  ";
    }
}

for (var k = 1; k <= tailleCarre; k= k+ 1){
    if ( k===1 || k === tailleCarre ){
        console.log(grandLigne);

    }else {
        console.log( petitLigne);
    }
}
