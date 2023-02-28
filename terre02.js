function afficheurArgument(phrase){
    const phraseSansEspace = phrase.split(" ")
    for (mot of phraseSansEspace){
        console.log(mot)

    }
}

const test = "Je suis un test"
afficheurArgument(test)