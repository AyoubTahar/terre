const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Entrez un nombre\n', a => {
    if (a >= 0 || a <= 0 ){
        readline.question('Entrez un exposant\n', b => {
            if (b >= 0 ){
                console.log(a**b)
                readline.close() 
            }
            else if (b < 0){
              console.log('Entrée invalide')
              readline.close()
            }
        })
    }
    else {
        console.log('Entrée invalide')
        readline.close()
    }
  })
