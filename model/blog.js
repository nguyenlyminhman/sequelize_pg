module.exports = (sequelize, type) => {

    const blog = sequelize.define('blogs', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        text: type.STRING
    })

    return blog;
}