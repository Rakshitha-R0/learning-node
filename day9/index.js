import { createServer } from "http";
import { parse } from "querystring";
import fs from "fs";

let PORT = 5000;
let server = createServer((req, res) => {
  if (req.method === "POST") {
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      let body = "";
      req.on("data", (chunks) => {
        body += chunks;
      });
      req.on("error", (err) => {
        console.log(err);
      });
      req.on("end", () => {
        let parsedBody = parse(body);
        fs.writeFileSync("./contact.json", JSON.stringify(parsedBody, null, 2));
        console.log("Data saved to contact.json");
        res.writeHead(302, { Location: "/index" });
        res.end();
      });
    } else {
      res.end("not form data");
    }
  } else {
    if (req.url === "/" || req.url === "/home") {
      res.writeHead(200, "Ok", { "Content-Type": "text/html" });
      let home = fs.readFileSync("./index.html", "utf-8");
      res.end(home);
    } else if (req.url === "/contact") {
      res.writeHead(200, "Ok", { "Content-Type": "text/html" });
      let contact = fs.readFileSync("./contact.html", "utf-8");
      res.end(contact);
    } else if (req.url === "/style") {
      res.writeHead(200, "Ok", { "Content-Type": "text/css" });
      let css = fs.createReadStream("./style.css", "utf-8");
      css.pipe(res);
    } else if (req.url === "/blog") {
      res.writeHead(200, "Ok", { "Content-Type": "text/html" });
      let blog = fs.readFileSync("./blog.html", "utf-8");
      res.end(blog);
    } else if (req.url === "/discover") {
      res.writeHead(200, "Ok", { "Content-Type": "text/html" });
      let discover = fs.readFileSync("./discover.html", "utf-8");
      res.end(discover);
    } else {
      res.writeHead(404, "Not Found", { "Content-Type": "text/html" });
      let pnf = fs.readFileSync("./pnf.html", "utf-8");
      res.end(pnf);
    }
  }
});

server.listen(PORT, () => console.log(`Server is on ${PORT}....`));
