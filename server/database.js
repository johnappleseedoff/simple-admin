const pg = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'simple_admin_user',
    password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
    host: 'frankfurt-postgres.render.com',
    port: 5432,
    database: 'simple_admin',
    ssl: true
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
