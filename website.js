

const http = require("http");
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.end(
      "<h1> This is Abhishek Yadav</h1> <p> This is the way to rock the world </p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;

    res.end(
      "<h1> This is about Abhishek Yadav</h1> <p> This about the world </p>"
    );
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } 
  else {
    //  res.Abhishek();  just to check wheter the server crash or not

    res.statusCode = 404;
    res.end("<h1> Not found</h1> <p> This page not found  on the portal </p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listining on the ${port}`);
});
