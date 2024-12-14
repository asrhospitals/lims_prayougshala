const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgresql://postgres:xKziuWocJdjwwFVFzlyOgMwnOjmYBUGq@junction.proxy.rlwy.net:32729/railway');
module.exports = sequelize;
