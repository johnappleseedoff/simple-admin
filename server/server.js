const express = require('express')
const cors = require('cors')
const get_sql = require('./database')

const app = express()
const corsOptions = {origin: 'http://localhost:5173'}



const dt = get_sql.fetchData()
//console.log('Server sends', dt)
console.log('Server sends', dt)


app.use(cors(corsOptions));
app.get('/test', (req, res) => {
    res.json({r: dt});//json({fruits: ["bananas", "apples", "cherries"]});
})
app.listen(3000, () => {console.log('Server is running on port 3000')});

