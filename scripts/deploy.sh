
cd out
rm -Rf .git
git init
touch .nojekyll
git add -A
git commit -a -m "Deployed"
git remote add origin git@github.com:lilycoco/lilycoco.github.io.git
git push -f origin master
