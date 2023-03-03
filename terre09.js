const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer un nombre \n", a => {
    let estDecimal = true
    let racineCarre = ''
    if (a >= 0 && (a ^ 0) === a){
        for(let i = 0 ; i <= a ; i++) {
            if((i*i) == a){
                estDecimal = false
                racineCarre = i
                break
            }
        }
    }
    else{
        console.log('Entrée invalide')
    }
    if (estDecimal){
        console.log('La racine est décimale')
        } else {
        console.log(racineCarre)
        }
      readline.close();
  });
