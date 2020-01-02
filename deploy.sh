#!/bin/sh
heroku create
heroku config:set BASE_URL=$(heroku info -s | grep web_url | cut -d= -f2)
heroku config:set TGTOKEN=$1
# Uncomment the next line to deploy as container
#heroku stack:set container
git push heroku master
heroku logs --tail
heroku apps:destroy