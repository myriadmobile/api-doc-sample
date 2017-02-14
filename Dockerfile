FROM myriadmobile/nginx:v1.28
MAINTAINER Chris Roemmich <croemmich@myriadmobile.com>

ADD dist/. /var/www/public
