const http = require('http');


http.createServer((req, res) => {
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