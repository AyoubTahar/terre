const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer une phrase \n", phrase => {
    if (phrase >= 0 || phrase <= 0){
        console.log('Erreur')
    }
    else{
        console.log(phrase.length)
    }
      readline.close();
  });
