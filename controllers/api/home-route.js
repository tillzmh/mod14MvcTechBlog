const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const isPostCreator = require('../utils/isPostCreator');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                }]
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        for (var idx = 0; idx < posts.length; idx++) {
            posts[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
        }
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
            pageDescription: 'The Tech Blog'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login', {
        pageDescription: 'The Tech Blog'
    });
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup', {
        pageDescription: 'The Tech Blog'
    });
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    try {
        posts = [];
        if (req.session.loggedIn) {
            const postData = await Post.findAll({
                where: {
                    creator_id: req.session.loggedInId
                }
            });
            posts = postData.map((post) =>
                post.get({ plain: true })
            );
        }
        for (var idx = 0; idx < posts.length; idx++) {
            posts[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
        }
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Your Dashboard'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});