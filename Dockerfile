FROM node:10.10.0

WORKDIR usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["Npm", "start"]

COPY . .
