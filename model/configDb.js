const Sequelize = require('sequelize');
const UserModel = require('./user');
const BlogModel = require('./blog');
const TagModel = require('./tag');

const sequelize = new Sequelize('sequelize', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  operatorsAliases: false,
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize)
const Blog = BlogModel(sequelize, Sequelize)
const BlogTag = sequelize.define('blog_tag', {})
const Tag = TagModel(sequelize, Sequelize)

Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
Blog.belongsTo(User);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!')
  })

module.exports = { User, Blog, Tag };
