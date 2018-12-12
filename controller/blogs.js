const { Blog } = require('../model/configDb')
module.exports = {

    getAll(req, res) {
        Blog.findAll().then(blog => res.json(blog))
    },

    insert(req, res) {
        let { text, userid } = req.body
        Blog.create({ text: text, userId: parseInt(userid) })
            .then(blog => res.status(200).send(blog))
            .catch(err => console.log(err))
    },

    getById(req, res) {
        let { id } = req.params
        Blog.findAll({
            where: {
                id: id
            }
        })
            .then(blog => res.status(200).json(blog))
            .catch(err => res.status(500).json({ msg: err }))
    },

    delete(req, res) {
        let { id } = req.params
        Blog.destroy({
            where: {
                id: id
            }
        }).then(blog => res.status(200).json(blog))
    },

    update(req, res) {

        let { id } = req.params
        let { name } = req.body

        Blog.update(
            {
                name: name
            }, {
                where: {
                    id: id
                }
            }
        ).then(blog => res.status(200).json(blog))
    }

}