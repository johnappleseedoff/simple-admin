import postgres from "postgres";

const db = postgres({
    username: 'simple_admin_user',
    password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
    host: 'postgresql://simple_admin_user:tKN51n600TTp481e63IiNXdLBGoa1CIt@dpg-cromr3aj1k6c739kim50-a/simple_admin',
    port: 5432,
    database: 'simple_admin',
});

export default db;