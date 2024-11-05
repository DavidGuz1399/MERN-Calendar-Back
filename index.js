const path = require('path')
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors')

const app = express();

//DB
dbConnection();

//CORS

app.use(cors())

//Directorio publico

app.use(express.static('public'))

//Lectura y parseo del body

app.use(express.json())

//Rutas
//TODO: auth
app.use('/api/auth', require('./routes/auth'))
//TODO: CRUD
app.use('/api/events', require('./routes/events'))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})