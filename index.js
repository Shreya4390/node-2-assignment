import http from 'http';
import file from './component/file';

file();

const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
  res.end('Server started successfully!');
}).listen(3500);

export default server;
