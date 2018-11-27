module.exports = (sequelize, type) => {
    return sequelize.define('blogs', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        text: type.STRING
    })
}