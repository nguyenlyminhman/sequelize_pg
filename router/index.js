const user = require('../controller/users')
module.exports = app => {

    app.route('/api/user')
        .get(user.getAll)
        .post(user.insert)

    app.route('/api/user/:id')
        .get(user.getById)
        .delete(user.delete)
        .put(user.update)
}
