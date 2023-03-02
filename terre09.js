const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer un nombre \n", a => {
    
    if (a >= 0 && Number.isInteger(a*1)){
        for(let i = 0 ; i <= a ; i++) {
            if((i*i) == a){
                console.log(i)
            }
            else if (i == a){
                console.log('La racine est décimale')
            }
        }
    }
    else{
        console.log('Entrée invalide')
    }
      readline.close();
  });
