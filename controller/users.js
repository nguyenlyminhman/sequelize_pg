const { User } = require('../model/configDb')
module.exports = {

    getAll(req, res) {
        User.findAll()
            .then(users => res.json(users))
            .catch(err => res.status(500).json({ msg: err }))
    },

    insert(req, res) {
        let { name } = req.body
        User.create({ name: name })
            .then(user => res.status(200).send(user))
            .catch(err => res.status(500).json({ msg: err }))
    },

    getById(req, res) {
        let { id } = req.params
        User.findAll({ where: { id: id } })
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json({ msg: "not found" }))
    },

    delete(req, res) {
        let { id } = req.params
        User.destroy({ where: { id: id } })
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json({ msg: err }))
    },

    update(req, res) {
        let { id } = req.params
        let { name } = req.body
        User.update({ name: name }, { where: { id: id } })
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json({ msg: err }))
    }

}