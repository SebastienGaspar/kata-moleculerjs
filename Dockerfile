FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app


RUN npm i -g moleculer-cli
COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
