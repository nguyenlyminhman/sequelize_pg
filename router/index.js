const express = require('express');
const router = express.Router();

const { User, Blog, Tag } = require('../model/configDb')

router.get('/user', (req, res) => {
    User.findAll().then(users => res.json(users))
});

router.post('/user', (req,res)=>{
    const {name} = req.body
    User.create({name:name}).then(user => res.json(user)).catch(err=>console.log(err))
})





module.exports = router;