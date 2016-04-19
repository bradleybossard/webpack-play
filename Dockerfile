FROM bradleybossard/docker-common-devbox
MAINTAINER Bradley Bossard <bradleybossard@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -

RUN apt-get install -y nodejs

RUN npm install --global --allow-root webpack webpack-dev-server eslint live-server
