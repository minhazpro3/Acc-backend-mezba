// local modules
const { name, add } = require("./others");
const http = require("http");
const url = require("url");

console.log(name);

console.log(add(2, 3));

// core module
const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.write("<p>This is home page</p>");
  //   res.end("Hello ");
  // } else if (req.url === "/about") {
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify({ course: "ACC" }));
  //   res.end();
  // }

  const rul_qr = "http://localhost:5000/contact?name=minhaz&country=bangladesh";
  const parsed = url.parse(rul_qr, true);
  const query_object = parsed.query;
  console.log(parsed);
});
console.log(url.parse);
server.listen(5000, () => {
  console.log("server running 5000");
});
