var readline = require("readline-sync");
var nombreDeMarches = readline.questionInt("Combien de marches ? ");

for (var i = 1; i<= nombreDeMarches; i = i + 1){
    var ligne = "_/";
    for (var j= nombreDeMarches-1; j>=i; j=j-1){
    var ligne = "  " + ligne;
}
console.log(ligne);
}