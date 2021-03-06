const user = require('../controller/users')
const blog = require('../controller/blogs')
const tag = require('../controller/tags')

module.exports = app => {

    app.route('/api/user')
        .get(user.getAll)
        .post(user.insert)

    app.route('/api/user/:id')
        .get(user.getById)
        .delete(user.delete)
        .put(user.update)

    app.route('/api/blog')
        .get(blog.getAll)
        .post(blog.insert)

    app.route('/api/blog/:id')
        .get(blog.getById)
        .delete(blog.delete)
        .put(blog.update)

        app.route('/api/tag')
        .get(tag.getAll)
        .post(tag.insert)

    app.route('/api/tag/:id')
        .get(tag.getById)
        .delete(tag.delete)
        .put(tag.update)


}
