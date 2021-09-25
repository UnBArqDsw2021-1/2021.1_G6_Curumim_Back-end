module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  operatorAliases: 'false',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
