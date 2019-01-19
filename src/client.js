// import http from 'http';
import net from 'net';
import Repl from 'repl';
import {} from 'dotenv/config';

const client = new net.Socket();
client.connect(
  3000,
  '127.0.0.1',
  () => console.log('Connected')
);

const repl = Repl.start({
  prompt: 'client> ',
  useColors: true,
  replMode: Repl.REPL_MODE_STRICT,
  ignoreUndefined: true
});

repl.on('line', newLine => {
  const line = newLine.trim();
  if (line) {
    client.write(line);
  }
});
