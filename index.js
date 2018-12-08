const express =  require('express')
const bodyParser = require('body-parser')

const models = require('./model/configDb')
const router = require('./router/index')
const parser = require('body-parser').urlencoded({ extended: true });

const app = express()

app.use(parser)

app.use('/api', router)

app.listen(3000, ()=>{
    console.log('Server is running on host', 3000)
})
