const express =  require('express')
const bodyParser = require('body-parser')

const models = require('./model/configDb')
const router = require('./router/index')

const app = express()
app.use(bodyParser.json())


app.use('/api', router)

app.listen(3000, ()=>{
    console.log('Server is running on host 3000')
})
