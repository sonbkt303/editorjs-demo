const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8008;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};


const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Handle root path
    if (req.url === '/') {
        req.url = '/index.html';
    }

    // Build file path
    let filePath = path.join(__dirname, req.url);

    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║     Editor.js Demo Server Running! 🚀     ║
║                                           ║
║     URL: http://localhost:${PORT}          ║
║                                           ║
║     Press Ctrl+C to stop the server       ║
║                                           ║
╚═══════════════════════════════════════════╝
    `);
});
