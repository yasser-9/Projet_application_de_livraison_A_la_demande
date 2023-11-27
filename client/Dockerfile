FROM node:16
# node18 normalement
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


CMD [ "npm", "run", "start" ]
