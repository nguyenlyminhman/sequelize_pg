const { Blog, User, Tag } = require('../model/configDb')
module.exports = {

    getAll(req, res) {
        console.log(User)
        Blog.findAll()
            .then(blog => res.json(blog))
            .catch(err => res.status(500).json({ msg: err }))
    },

    insert(req, res) {
        let { text, userId } = req.body
        Blog.create({ text: text, userId: parseInt(userId) })
            .then(blog => res.status(200).send(blog))
            .catch(err => res.status(500).json({ msg: err }))
    },

    getById(req, res) {
        let { id } = req.params
        Blog.findById(id)
            .then(blog => res.status(200).json(blog))
            .catch(err => res.status(500).json({ msg: err }))
    },

    delete(req, res) {
        let { id } = req.params
        Blog.destroy({ where: { id: id } })
            .then(blog => res.status(200).json(blog))
            .catch(err => res.status(500).json({ msg: err }))
    },

    update(req, res) {
        let { id } = req.params
        let { text, userId } = req.body
        Blog.update({ text: text, userId: userId }, { where: { id: id } })
            .then(blog => res.status(200).json(blog))
            .catch(err => res.status(500).json({ msg: err }))
    }

}
