const { Tag } = require('../model/configDb')
module.exports = {

    getAll(req, res) {
        Tag.findAll()
            .then(tag => res.json(tag))
            .catch(err => res.status(500).json({ msg: err }))
    },

    insert(req, res) {
        let { name } = req.body
        Tag.create({ name: name })
            .then(tag => res.status(200).send(tag))
            .catch(err => res.status(500).json({ msg: err }))
    },

    getById(req, res) {
        let { id } = req.params
        Tag.findAll({ where: { id: id } })
            .then(tag => res.status(200).json(tag))
            .catch(err => res.status(500).json({ msg: err }))
    },

    delete(req, res) {
        let { id } = req.params
        Tag.destroy({ where: { id: id } })
            .then(tag => res.status(200).json(tag))
            .catch(err => res.status(500).json({ msg: err }))
    },

    update(req, res) {
        let { id } = req.params
        let { name } = req.body
        Tag.update({ name: name }, { where: { id: id } })
            .then(tag => res.status(200).json(tag))
            .catch(err => res.status(500).json({ msg: err }))
    }

}