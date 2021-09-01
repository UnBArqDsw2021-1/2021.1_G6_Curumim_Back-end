module.exports = {
    dialect: process.env.DB_DIALECT  || 'postgres',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    define: {
        timestamps: true,
    },
};