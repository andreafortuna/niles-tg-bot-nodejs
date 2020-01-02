# Niles: telegram bot template for PaaS

Simple NodeJs telegram bot template, designed to run on PaaS (currently only works on Heroku)

## Requisites

- Heroku-Cli installed and configured (https://devcenter.heroku.com/articles/heroku-cli)
- A telegram bot token (https://core.telegram.org/bots#6-botfather)

## How to use it

![Deploy](https://www.andreafortuna.org/wp-content/uploads/2020/01/niles.png)


First, clone the repository:

```
git clone https://github.com/andreafortuna/niles-tg-bot-nodejs
```

Then customize the code on index.js and start deploy.sh passing bot token as argument:

```
./deploy.sh XXXXXXXXXXXXXXXXXXX
```

When you make changes on code, deploy the changes with a git commit & push:

```
git commit -am "some code changes" && git push heroku master

