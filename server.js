const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/' && req.method === 'GET') {
        const getBrowserData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    browser: req.headers['user-agent'],
                    method: req.method,
                    url: req.url
                });
            }, 2000);
        });
        getBrowserData.then((browserData) => {
            res.write(JSON.stringify(browserData));
            res.end();
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})
