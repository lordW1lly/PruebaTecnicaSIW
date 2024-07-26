const server = require('./app.js');
const { conn } = require('./dbase.js');


const port = 3001
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`); // eslint-disable-line no-console
  });
});

