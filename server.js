const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log('receving');
  // console.log(arguments);

  const mydata = [];
  req.on('data', (chunk) => { mydata.push(chunk); });
  req.on('end', () => {
    const reqbody = Buffer.concat(mydata).toString();
    console.log(reqbody);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('received:' + reqbody);
  });
});

server.listen(process.env.PORT, '127.0.0.1', function () {
    console.log('start server');
});
