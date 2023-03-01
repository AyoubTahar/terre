const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer une phrase \n", phrase => {
    const phraseA = phrase
    let phraseB= ''
      for(let i = phraseA.length ; i >= 0 ; i--){
        phraseB +=  phraseA[i]
      }
      console.log(phraseB)
      readline.close();
  });
