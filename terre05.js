const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Entrez un premier chiffre\n', a => {
    if (a > 0){
        readline.question('Entrez un second chiffre\n', b => {
            if (b > 0 && b <= a){
                const resultat = ~~Number(a/b)
                const reste = Number(a%b)
                console.log(`résultat :${resultat}\nreste : ${reste}`)
                readline.close() 
            }
            else{
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
