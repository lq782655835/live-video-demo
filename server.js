let https = require('https'),
    fs = require('fs'),
    WebSocket = require('ws'),
    options = {
        key: fs.readFileSync('./key.pem'),
        cert:fs.readFileSync('./key-cert.pem')
    },
    server = https.createServer(options, function(req, res){
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });
    }).listen(3001, function(){
        console.log('服务启动成功')
    });
const wss = new WebSocket.Server({server});
    wss.binaryType = 'arraybuffer';
    wss.on('connection', (ws) => {
        console.log('connect success')
        ws.on('message', function(data) {  
            console.log(data, 123)
            wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN && client !== ws) {
                    client.send(data);
                    }
                });
            }); 
    });
    