const user = require('../controller/users')
const blog = require('../controller/blogs')

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
}
