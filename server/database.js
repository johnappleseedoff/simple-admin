const pg = require('pg');
const postgres = require('postgres')
const { Client } = pg


/*const db = new Client({
        user: 'postgres',
        password: 'postgres',
        host: 'http://localhost',
        port: 5432,
        database: 'postgres',
        // user: 'simple_admin_user',
        // password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
        // host: 'frankfurt-postgres.render.com',
        // port: 5432,
        // database: 'simple_admin',
    })
async function DB() {
    const query = {
        text: 'SELECT * FROM test_table',
    }
    await db.connect()
    const db_res = await db.query(query)//({'SELECT * FROM test_table', rowMode: 'array' })
    console.log(db_res)
    await db.end()
    return db_res
}

module.exports = DB*/


const sql = postgres({
    host                 : 'http://localhost',    // Postgres ip address[s] or domain name[s]
    port                 : 5432,                  // Postgres server port[s]
    database             : 'postgres',            // Name of database to connect to
    username             : 'postgres',            // Username of database user
    password             : 'postgres'
})


async function getData() {
    const data = await sql`
    select
      *
    from test_table
  `
    // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
    return data
}
module.exports = getData