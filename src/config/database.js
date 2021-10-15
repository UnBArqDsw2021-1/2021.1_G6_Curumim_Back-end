require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  operatorAliases: 'false',
  logging: false,

  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
