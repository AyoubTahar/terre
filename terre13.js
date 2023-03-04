const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Entrer un nombre \n', a => {
    let nombreA = a*1
    let nombreAisBigger = false
        readline.question('Entrer un nombre \n', b => {
            let nombreB = b*1
            let nombreBisBigger = false
            readline.question('Entrer un nombre \n', c => {
                let nombreC = c*1
                let nombreCisBigger = false
                if (nombreA === nombreB && nombreA === nombreC){
                    console.log('Erreur')
                }
                else if (nombreA > nombreB && nombreA > nombreC && nombre){
                    nombreAisBigger = true
                }
                else if (nombreB > nombreC && nombreB > nombreA){
                    nombreBisBigger = true
                }
                else if (nombreC > nombreA && nombreC > nombreB){
                    nombreCisBigger = true
                }
                
                if(nombreAisBigger && nombreB > nombreC){
                    console.log(`${nombreB}`)
                }
                else if (nombreAisBigger && nombreC > nombreB){
                    console.log(`${nombreC}`)
                }
                else if (nombreBisBigger && nombreA > nombreC){
                    console.log(`${nombreA}`)
                }
                else if (nombreBisBigger && nombreC > nombreA){
                    console.log(`${nombreC}`)
                }
                else if (nombreCisBigger && nombreA > nombreB){
                    console.log(`${nombreA}`)
                }
                else if (nombreCisBigger && nombreB > nombreA){
                    console.log(`${nombreB}`)
                }
                
                readline.close()
            })
    })
  })
