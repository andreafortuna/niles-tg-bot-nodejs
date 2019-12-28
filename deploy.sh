#!/bin/sh
heroku create
heroku reviewapps:enable -p my-pipeline --autodeploy --autodestroy
#heroku stack:set container
git push heroku master
heroku logs --tail
heroku apps:destroy