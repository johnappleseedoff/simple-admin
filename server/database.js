const pg = require('pg');
const { Client } = pg

async function fetchData() {
    let data
    const sql = new Client({
        user: 'simple_admin_user',
        password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
        host: 'frankfurt-postgres.render.com',
        port: 5432,
        database: 'simple_admin',
        ssl: true
    })
    const query = 'SELECT * FROM test_table'
    await sql.connect()
        .then(() => {
            console.log('Connected to PostgreSQL database');

            sql.query(query, (err, res) => {
                if (err) {
                    console.error('Error executing query', err);
                } else {
                    data = JSON.stringify(res.rows);
                    console.log('Query result:', res.rows);
                    console.log('What return:', data);
                }
                sql.end()
                    .then(() => {
                        console.log('Connection to PostgreSQL closed');
                    })
                    .catch((err) => {
                        console.error('Error closing connection', err);
                    });
            });
        });
    return data
}
/*const data = fetchData()
console.log('Data export:')
console.log(data)*/

module.exports = { fetchData }

/*async function getData() {
    const query = {
        text: 'SELECT * FROM simple_admin.public.test_table',
    }
    //await sql.connect()
    const db = await sql.query(query)
    console.log(db.rows[0].name)
    await sql.end()
    return db.rows[0].name
}*/

//module.exports = { getData }