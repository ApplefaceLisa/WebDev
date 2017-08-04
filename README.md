# WebDev
all web development exercises


# TBD
## HEROKU
- [Create a Web App and RESTful API Server Using the MEAN Stack](https://devcenter.heroku.com/articles/mean-apps-restful-api)
- [Deploying a MEAN stack app to Heroku](http://www.tilcode.com/deploying-a-mean-stack-app-to-heroku/)
- [MEAN Stack App Part 20: Deploy App Using Heroku](https://www.youtube.com/watch?v=IhU6x94eTXU)
- [MongoDB for your Heroku NodeJS app](https://www.youtube.com/watch?v=GDqtv1eGGpA&t=13s)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
### Deploying app to Heroku
#### [Heroku setup](https://classroom.udacity.com/courses/ud272/lessons/b36fbb24-bfb1-4401-bb8d-9fff509bf016/concepts/89efbf29-454f-4b3d-9af7-006aff792b41)
- register a Heroku account;
- download [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli), i.e. Heroku CLI;
- Heroku Login

  under command line shell, input `heroku login`. This will prompt you for your Heroku email and password. You won’t have to log in every time you want to deploy, your credentials will be saved for some time.
  
  ![heroku login](heroku-login.gif)

- install Git
- change your working directory to the repository directory
- Heroku Create

  To get yourself deployed on Heroku, you must first create a remote on Git. To do this you have to run the `heroku create` command. This will make a new remote repo named heroku where the code will be pushed to.
  ![heroku create](heroku-create.png)
  
  To ensure you have properly created this remote, run the `git remote -v` command, you should see something output that reveals the two remotes listed, origin and heroku.
  ![git remote -v](git-remote-v.png)
