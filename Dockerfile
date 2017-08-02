FROM nginx
COPY proxy.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html
