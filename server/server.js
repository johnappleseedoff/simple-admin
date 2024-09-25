const express = require('express')
const cors = require('cors')
const app = express()
const corsOptions = {origin: 'http://localhost:5173'}
const getData = require('./database')

//const db_r = DB;


app.use(cors(corsOptions));
app.get('/test', (req, res) => {
    res.json({r: getData});//json({fruits: ["bananas", "apples", "cherries"]});
})
app.listen(3000, () => {console.log('Server is running on port 3000')});