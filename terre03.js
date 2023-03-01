const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz'
  let miniAlphabet = ""
  readline.question('Entrer une lettre \n', lettre => {
        for(let i = 0; i < alphabetStr.length ; i++){
          if(alphabetStr[i] == lettre){
            const index = i
            for(i = index ; i < alphabetStr.length ; i++){
             miniAlphabet += alphabetStr[i]
            }
          }
        }
        console.log(miniAlphabet)
  readline.close();
})
