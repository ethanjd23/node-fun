let path = require('path');
let fs = require('fs');


let dataPath = path.join(__dirname, '../chirps.json');
let chirps = [
    { username: "peepee", message: "poopoo" },
    { username: "hello", message: "world" },
    { username: "Jimmmy", message: "i be coolin" },
    { username: "ya boi", message: "Node" },
    { username: "ya girl", message: "JS"}
  ]

let chirpsJSON = JSON.stringify(chirps)

fs.writeFile(dataPath, chirpsJSON, (err, data) => {
    console.log(err);
    console.log(data);
});
