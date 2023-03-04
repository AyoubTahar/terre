const args = process.argv
let pasTriée = false
let erreurArg = false
for(let i = 2 ; i< args.length ; i++){
    if(args[i] >= 0 || args[i] <= 0){
        if(args[i] > args[i+1]){
            pasTriée = true
            break
        }
    }
    else {
        erreurArg=true
        break
    }
}
if (pasTriée){
    console.log('Pas triée')
}
else if (erreurArg) {
    console.log('Erreur')
}
else {
    console.log('Triée !!!')
}
