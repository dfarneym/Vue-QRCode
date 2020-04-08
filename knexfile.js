// Conexão com banco de dados
const { db } = require('./.env')

module.exports = {
  development: {
    client: 'postgres',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        tableName: 'knex_migrations'               
      }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'        
     }

   } 
      
};



