const { Post } = require('../models');

const postData = [
    {
        title: "Javascript",
        contents: "A programming language whose possiblities are endless",
        creator_id: 1
    },
    {
        title: "Express",
        contents: "A Node package that works well within Javascript",
        creator_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
