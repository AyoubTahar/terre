const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Entrer un chiffre \n", (chiffre) => {
  if ((chiffre > 0 || chiffre < 0) ) {
    if (chiffre % 2 == 0 || chiffre % 2 == -0) {
      console.log("chiffre paire");
    } else {
      console.log("chiffre impaire");
    }
  } else {
    console.log("Reste concentrĂ©");
  }
  readline.close();
});
