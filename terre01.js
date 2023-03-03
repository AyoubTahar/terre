const path = __filename;
let filename = "";
for (let i = path.length - 1; i >= 0; i--) {
  if (path[i] === "/") {
    break;
  }
  filename = path[i] + filename;
}
console.log(filename);
