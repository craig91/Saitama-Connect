const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.url === '/' || request.url === '/index.html') {
        fs.readFile('index.html' , (err,data) => {
            if (err) {  response.writeHead(404); response.end("File not found"); return; }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (request.url === '/styles.css') {
        fs.readFile('styles.css', (err, data) => {
            if (err) { response.writeHead(404); response.end("File not found"); return; }
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.end(data);
        })
    } else {
        response.writeHead(404);
        response.end("Not found");    
}


});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})