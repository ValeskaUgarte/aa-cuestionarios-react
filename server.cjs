const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.get('/', (req, res) => {
  res.send(`<h1>API Cuestionarios</h1><a href="/asignaturas">/asignaturas</a><br><a href="/reportes">/reportes</a>`);
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => console.log('API en http://localhost:3001'));