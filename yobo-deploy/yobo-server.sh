echo "Start deployment"

cd /root/yobo-server

echo "pulling source code..."

git init
git remote add origin https://github.com/zpkweb/yobo-server.git
# git reset --hard origin/main
# git clean -f
git pull origin main

echo "Finished."
