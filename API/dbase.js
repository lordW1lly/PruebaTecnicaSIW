const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize('facturaciondb', 'root', 'Canela447', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: false // Deshabilita las columnas createdAt y updatedAt para todos los modelos
  }
  
});

 

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Factura } = sequelize.models;

//**Relaciones */
//!! me parece que no hay relaciones!! 
User.belongsToMany(Factura, {through: 'user_facturas'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};