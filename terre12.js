const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Entrer l'heure format 12\n", a => {
    let heure = ""
    let minute = ""
    if (a.length == 7 && a[0] >= 0 && a[1] > 0 && a[2] == ':' && a[3] >= 0 && a[4] >= 0){
        for (i=0 ; i<= 1 ; i++){
            heure += a[i]
        }
        for (i=3 ; i<=4 ; i++){
            minute += a[i]
        }
    } 
    else {
        console.log('Entrée invalide')
    }
    if(heure > 12 || heure < 0 || minute > 59 || minute < 0 || a[2] !== ':'){
        console.log('Entrée invalide')
    }
    else if (heure < 12 && a[5] =='P' ){
        heure *= 1
        console.log(`${heure+12} : ${minute} `)
    }
    else if (heure < 12 && a[5] =='A' ){
        console.log(`${heure} : ${minute} `)
    }
    else if (heure = 12 && a[5] == 'A'){
        
        console.log(`00 : ${minute} `)
    }
    else if (heure = 12 && a[5] == 'P'){
        console.log(`12 : ${minute}`)
    }
      readline.close();
  });
