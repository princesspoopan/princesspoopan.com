#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# Based on https://github.com/eldarlabs/ghpages-deploy-script/blob/master/scripts/deploy-ghpages.sh
# Used with their MIT license https://github.com/eldarlabs/ghpages-deploy-script/blob/master/LICENSE

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd
remote=$(git config remote.origin.url)

# now lets setup a new repo so we can update the gh-pages branch
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

echo '######### clone princesspoopan.github.io #########'
git clone git@github.com:princesspoopan/princesspoopan.github.io.git
echo ''

echo '######### copy items from build #########'
cd princesspoopan.github.io
yes | cp -rf ../build/* ./
echo ''

echo '######### commit and push to github #########'
git add . && git commit --allow-empty -a -m ':rocket: auto deployment'
git push -f
echo ''

echo '######### deploy to princesspoopan.github.io sucessfully #########'
echo ''
