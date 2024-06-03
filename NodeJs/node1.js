const http = require('http');
const fs = require('fs');
const path = require('path');

function requestListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1]; // Assuming the input field's name is 'message'
            // fs.writeFile('message.txt', message,(err)=>{
            //     console.log(err);
            //     res.writeHead(302, { 'Location': '/' });
            //     return res.end();
            // });
            fs.writeFileSync('message.txt', message,(err)=>{
                console.log(err);
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
            
        });
    }

    // Commented code retained as requested
    console.log(req.url, req.method, req.headers);
    // if(req.url === '/'){
    //     fs.readFile('./index.html', 'UTF-8', function(err, html){
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(html);
    //     });
    // }

    // process.exit();

    if (req.url === '/') {
        fs.readFile('./index.html', 'UTF-8', function(err, html) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>kunal</title></head>');
        res.write('<body><h1>hello kunal</h1></body>');
        res.write('</html>');
        res.end(); // End the response
    }
}

http.createServer(requestListener).listen(8080);
console.log('Server is running on port 8080');


