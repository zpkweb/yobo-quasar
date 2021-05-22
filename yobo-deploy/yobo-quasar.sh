# deploy.sh
#! /bin/bash
# 确保脚本抛出遇到的错误
# set -e

# cd /home/kaka-vue-admin

# git reset --hard origin/master
# git clean -f
# git pull
# git checkout master


#!/bin/bash

# WEB_PATH='/root/'$1
# WEB_USER='root'
# WEB_USERGROUP='root'

echo "Start deployment"
# cd $WEB_PATH
cd /root/yobo-quasar
echo "pulling source code..."
git init
git remote add origin https://github.com/zpkweb/yobo-quasar.git
# git reset --hard origin/main
# git clean -f
git pull origin main
git checkout main
# echo "changing permissions..."
# chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."
