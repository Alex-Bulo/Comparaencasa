const express = require('express')
const cors = require('cors')
var responseTime = require('response-time')
const apiRouter = require('./routes/apiRoutes')
const {connectRedis} = require('./cache/redisCache')

connectRedis()

const app = express();
app.use(express.json())

app.use(responseTime( (req, res, time) => console.log(`Elapsed time: ${time}`) ) )

const port = process.env.PORT || 3001

app.use(cors({
    origin:'http://localhost:3000'
}))

app.listen(port, function(){
    console.log(`Servidor corriendo en ${port}`);
})

app.use('/', apiRouter)


