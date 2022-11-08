const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const isPostCreator = require('../../utils/isPostCreator');

router.post('/new', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            contents: req.body.contents,
            creator_id: req.session.loggedInId
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});