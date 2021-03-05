const request = require("request");
const path = require("path");
const fs = require("fs");

let dataPath = path.join(__dirname, "./downloads/");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) {
    console.log(err);
  }

  JSON.parse(body).data.children.forEach((item) => {
    if (
      path.extname(item.data.url) === ".jpg" ||
      path.extname(item.data.url) === ".gifv" ||
      path.extname(item.data.url) === ".png" 
    ) { 
        fs.writeFile(`${dataPath}/${item.data.id}`, item.data.url, (err) => {
                if (err) {
                  console.log(err);
                }
              });   
    }
  });
//   fs.writeFile(dataPath, JSON.stringify(redditArray), (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
});
