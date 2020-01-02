# Niles: telegram bot template for PaaS

Simple NopdeJs telegram bot template, designed to run on PaaS (currently only on Heroku)

## Requisites

- Heroku-Cli installed and configured (https://devcenter.heroku.com/articles/heroku-cli)
- A telegram bot token (https://core.telegram.org/bots#6-botfather)

## How to use it

Customize the code on index.js, then start deploy.sh passing bot token as argument:

```
./deploy.sh XXXXXXXXXXXXXXXXXXX
```

When you make changes on code, deploy the changes with a git commit & push:

```
git commit -am "some code changes" && git push heroku master

