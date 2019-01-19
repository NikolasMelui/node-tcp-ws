// import http from 'http';
import net from 'net';
import {} from 'dotenv/config';

const client = new net.Socket();
client.connect(
  3000,
  '127.0.0.1',
  () => console.log('Connected')
);

setTimeout(() => client.write('Hi there!'), 2000);

client.on('data', data => {
  console.log(data.toString());
});
