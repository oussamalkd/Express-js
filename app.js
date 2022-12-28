const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/") {
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1 class="header"> Our Home Page </h1>`)
        res.end()
    } else if (url === "/about") {
        res.writeHead(200,{"content-type": "text/html"})
        res.write(`<h1 class="about-page"> About Page </h1>`)
        res.end()
    } else {
        res.writeHead(404,{"content-type": "text/html"})
        res.write(`
            <h1> 404 not found </h1>
            <p> back to <a href="/"> Home page </a></p>
        `)
        res.end()
    }
})

server.listen(2405)
console.log('the app is runing on http://localhost:2405');
