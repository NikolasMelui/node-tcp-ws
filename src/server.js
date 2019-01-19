import net from 'net';
import {} from 'dotenv/config';

const server = net.createServer(connect => {
  connect.on('data', data => {
    console.log(data.toString());
  });
});

server.on('connection', () => {
  console.log('The client was connected');
  // console.log(server.getConnections());
});

server.on('close', () => {
  console.log('The client was disconnected');
  // console.log(server.getConnections());
});

server.listen(3000, () => console.log('server is up on 3000 port'));
