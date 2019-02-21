const fetch = require('node-fetch');
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
    console.log("connected");

    client.on('add', async (msg, id) => {
        let m = JSON.parse(msg);
        fetch(`http://localhost:5000/api/add/${m.x},${m.y}`)
            .then(x => x.json())
            .then(x => {
                client.emit('add', x);
            });
    });

    client.on('sub', async (msg, id) => {
        let m = JSON.parse(msg);
        fetch(`http://localhost:5000/api/sub/${m.x},${m.y}`)
            .then(x => x.json())
            .then(x => {
                client.emit('sub', x);
            });
    });

    client.on('div', async (msg, id) => {
        let m = JSON.parse(msg);
        client.emit('sub', m.x / m.y);
    });

    client.on('mul', async (msg, id) => {
        let m = JSON.parse(msg);
        client.emit('mul', m.x * m.y);
    });


    // client.emit('greetings', 'Hello from the server!', client.id);
    client.on('disconnect', function () { });
});

server.listen(4001);