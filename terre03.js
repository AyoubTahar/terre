const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const alphabetStr = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  readline.question('Entrer une lettre \n', lettre => {
    if (alphabetStr.search(lettre)){
        const mini = alphabetStr.replaceAll(' ','')
        console.log(mini.substring(mini.indexOf(lettre)))
    }
    else {
        console.log('Entrée non valide')
    }
  readline.close();
})