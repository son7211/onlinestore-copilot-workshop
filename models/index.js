const Sequelize = require('sequelize');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Product = require('./product')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);


module.exports = db;
