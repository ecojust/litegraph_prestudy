import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

var clients = []

var i = 0;

wss.on('connection', function connection(ws) {
    clients.push(ws)
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
        ws.send(data);
    });
});



const ping = () => {
    clients.forEach(client => {
        client.send(`ping${i++}`);
    })
}


setInterval(ping, 1000)