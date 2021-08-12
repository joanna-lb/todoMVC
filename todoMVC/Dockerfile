FROM node:alpine
#抓取node的一个副本，alpine linux比大多数基础映像小得多
WORKDIR /todoMVC
#设置docker工作目录，使这些命令都在这个目录下面进行
COPY package.json package-lock.json /todoMVC/
RUN npm install
RUN npm install json-server -g --silent

EXPOSE 8080

COPY webpack.config.js /todoMVC/
CMD ["npm","run","dev","json-server","./data/db.json"]