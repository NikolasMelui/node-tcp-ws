import net from 'net';
import {} from 'dotenv/config';

const server = net.createServer(connect => {
  connect.write('hello\n');
  connect.pipe(connect);
});

server.on('data', data => console.log(data));
server.listen(3000, () => console.log('server is up on 3000 port'));
