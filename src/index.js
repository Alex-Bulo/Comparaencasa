const express = require('express')
const path = require('path')
const cors = require('cors')
const apiRouter = require('./routes/apiRoutes')
// const redis = require('redis');

const app = express();
app.use(express.json())

const port = process.env.PORT || 3001

app.use(cors({
    origin:'http://localhost:3000'
}))
// app.use(express.static(path.resolve(__dirname, './public')))

app.listen(port, function(){
    console.log(`Servidor corriendo en ${port}`);
})

app.use('/', apiRouter)


