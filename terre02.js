const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Entrez une phrase \n', phrase => {
    const phraseSansEspace = phrase.split(" ")
    for (mot of phraseSansEspace){
    console.log(mot)
    readline.close();
  }
})
