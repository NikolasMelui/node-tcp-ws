// import http from 'http';
import net from 'net';
import {} from 'dotenv/config';

const client = new net.Socket();
client.connect(
  3000,
  '127.0.0.1',
  () => console.log('Connected')
);
client.write('Hi there!');
