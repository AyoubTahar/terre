const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer un nombre \n", a => {
    let estPremier = true
    if (a < 2){
        estPremier = false
    } 
    else {
        for (let i=2 ; i<a ; i++){
            if (a%i === 0){
                estPremier = false;
                break;
            } 
        }
    }
    if (estPremier){
    console.log(`${a} est un nombre premier.`)
    } else {
    console.log(`Non, ${a} n’est pas un nombre premier.`)
    }
      readline.close();
  });
