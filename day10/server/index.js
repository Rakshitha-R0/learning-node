import {createServer} from 'http';

let server = createServer((req, res) => {
 let employees = [
    {
        name:"John",
        esal: 20000,
        skills: ["Java", "Spring", "Hibernate"]
    },
    {
        name:"Mike",
        esal: 30000,
        skills: ["Angular", "React", "Node"]
    }
 ]

 res.writeHead(200, "Okay", {"content-type": "application/json", "Access-Control-Allow-Origin": "*"});
 res.end(JSON.stringify(employees));
});

server.listen(8080, ()=>{
    console.log('Server is on 8080....');
})