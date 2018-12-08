const express = require('express');
const router = express.Router();
const { User, Blog, Tag } = require('../model/configDb')

router.get('/user', (req, res) => {
    User.findAll().then(users => res.json(users))
});

router.post('/user', (req,res)=>{
    let {name} = req.body
    console.log(name)
    User.create({name:name}).then(user => res.send(user)).catch(err=>console.log(err))
})





module.exports = router;