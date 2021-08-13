FROM node:current-alpine

WORKDIR '/app'

RUN npm install -g json-server --registry=https://registry.npm.taobao.org



COPY . .
EXPOSE 3000

CMD json-server db.json --port 3000 --host 0.0.0.0