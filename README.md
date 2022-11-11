# mod14MvcTechBlog

## ORM WEBSITE

The following is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. this site is completely builted from scratch and deployed it to Heroku. The MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Walk Through

When user visits the site for the first tim then user is presented with the homepage. 

When the user click on the homepage option the user taken to the homepage. When the user click on any other links in the navigation, then user is prompted to either sign up or sign in. When user user chooses to sign up, then user is prompted to create a username and password

When user clicks on the sign-up button, then the user credentials are saved and the user is logged into the site. 

When the user is signed in to the site, then they see navigation links for the homepage, the dashboard, and the option to log out.

When the user clicks on the homepage option in the navigation, then the user is taken to the homepage and presented with existing blog posts that include the post title and the date created.

When the user enter a comment and clicks on the submit button while signed in, then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

When the user clicks on the button to add a new blog post, then the user is prompted to enter both a title and contents for my blog post. 

When the user clicks on the button to create a new blog post, then the title and contents of my post are saved and the user is taken back to an updated dashboard with my new blog post.

## Built With

* [Express](https://expressjs.com/)
* [nodeJS](https://nodejs.org/en/)
* [mySQL](https://www.mysql.com/)
* [sequelize](https://sequelize.org/)

## GitHub
https://github.com/tillzmh/mod14MvcTechBlog/

## Heroku 

https://mod14mvctechblog.herokuapp.com/

