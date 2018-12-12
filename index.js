const express =  require('express')
const bodyParser = require('body-parser')

const models = require('./model/configDb')
const router = require('./router/index')
const parser = require('body-parser').urlencoded({ extended: true });

const app = express()
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(parser)

router(app)

app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(3000, ()=>{
    console.log('Server is running on host', 3000)
})
