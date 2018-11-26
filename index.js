const express =  require('express')
const bodyParser = require('body-parser')

const models = require('./model/configDb')

const app = express()
app.use(bodyParser.json())


app.get("/", (req, res)=>{
    models.Project.findAll().then(customers => {
        console.log(customers)
        res.json(customers);
    })
});

app.listen(3000, ()=>{
    console.log('Server is running on host 3000')
})
