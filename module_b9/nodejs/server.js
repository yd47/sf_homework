const express = require('express')
const bodyParser = require('body-parser')
const https = require("https");
const fs = require("fs");

const app = express()

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
})

app.get('/', urlencodedParser, function (
  request,
  response
) {
  response.sendFile(__dirname + '/register.html')
})
app.post('/register', urlencodedParser, function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)
  response.send(`Качаю favicon с сайта:
    ${request.body.sitename}`
  )
  // URL of the image
  const url = "https://"+`${request.body.sitename}`+"/favicon.ico";
  https.get(url, (res) => {
    const path = "download/test.ico";
    const writeStream = fs.createWriteStream(path);

    res.pipe(writeStream);
 
    writeStream.on("finish", () => {
      writeStream.close();
      console.log("Download Completed");
      console.log(url);
    });
  });  
})

app.listen(9090)
