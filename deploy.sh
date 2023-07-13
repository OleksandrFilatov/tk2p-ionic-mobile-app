#ionic build
cd dist
rsync -rv ./ root@dev.coach.tk2p.com:/var/www/pwa
cd ..
