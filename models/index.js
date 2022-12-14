const User = require('./user');
const Post = require('./post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'creator_id',
});

User.hasMany(Comment, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'creator_id',
});

Post.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'blog_post_id',
});


module.exports = {User, Post, Comment};