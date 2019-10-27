const ws = require('ws');

const wss = new ws().Server({ port: 8989 });

enum WsEvents {
  CONNECTION = 'connection',
  MESSAGE = 'message',
  CLOSE = 'close',
}

interface User {
  id: number;
  username: string;
}

const users: User[] = [];

const broadcast = (data, myWs) => {
  wss.clients.forEach(client => {
    if (client.readyState === ws.OPEN && client !== myWs) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on(WsEvents.CONNECTION, ws => {
  console.log('connected', ws);
  ws.on(WsEvents.MESSAGE, message => {
    console.log('message', message);
    broadcast(
      {
        message: 'hi',
      },
      ws,
    );
  });

  ws.on(WsEvents.CLOSE, () => {
    console.log('closed');
  });
});
