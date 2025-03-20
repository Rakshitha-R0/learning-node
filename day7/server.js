import http from 'http';

let serve = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.statusMessage = "Okay";
    res.setHeader("content-type","text/plain");
    // res.writeHead(200, "Hello",{"content-type": "text/plain"})
    res.write("hello");
    res.end();
})

serve.listen(5000, () =>{
    console.log('Server is running on 5000...');
})