// create web server
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // GET request
        if (req.url === '/api/comments') {
            // read comments from file
                fs.readFile(commentsPath, (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Failed to read comments' }));
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(data);
                    }
                });
            }
        }
    });