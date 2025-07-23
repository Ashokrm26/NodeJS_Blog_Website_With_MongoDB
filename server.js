const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('Request made..');
    console.log(req.url, req.method);

    // response object set header content type
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Hello, Ninjas')

    res.setHeader('Content-Type', 'text/html')

    res.write('<head><link rel="stylesheet" ref="#"></head>')
    res.write('<p>Hello Ninjas</p>')
    res.write('<p>Hello Again Ninjas</p>')
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
}) // now run the file and go to browser search localhost:3000