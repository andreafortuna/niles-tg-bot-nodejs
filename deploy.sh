#!/bin/sh
heroku create
heroku config:set BASE_URL=$(heroku info -s | grep web_url | cut -d= -f2)
heroku stack:set container
git push heroku master
heroku logs --tail
heroku apps:destroy