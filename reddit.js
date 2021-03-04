const request = require('request');
const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, './popular-articles.json')
let redditArray = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) {console.log(err)};

    JSON.parse(body).data.children.forEach(item => {
        redditArray.push({title: item.data.title, author: item.data.author, url: item.data.url})
    })
    fs.writeFile(dataPath, JSON.stringify(redditArray), (err) => {if(err) {console.log(err)};});
})