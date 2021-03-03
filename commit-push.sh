#! /bin/bash
# 确保脚本抛出遇到的错误
set -e

echo "git auto push start..."

# date
start=$(date +%s)

# cd .

# build
npm run build

end=$(date +%s)

dateNow=$(date +%T)
difference=$(( end - start ))

# push
git add .
git add .
git commit -m ":ok_hand: build at ${dateNow}"
git push origin master


echo "git auto push end..."
echo "build: used ${difference} s,now: ${dateNow}"
