import http from 'http';

let serve = http.createServer((req, res) =>{
    res.write('Hello World');
    res.end();
})

serve.listen(5000, () =>{
    console.log('Server is running on 5000...');
})