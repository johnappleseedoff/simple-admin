const express = require('express')
const cors = require('cors')
const db = require('./database')

const app = express()
const corsOptions = {origin: 'http://localhost:5173'}

app.use(cors(corsOptions));
app.get('/test', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM test_table');
        res.json({r: result.rows});
    }  catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})
app.listen(3000, () => {console.log('Server is running on port 3000')})