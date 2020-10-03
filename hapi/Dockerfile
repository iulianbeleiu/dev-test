FROM node:12-alpine

RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]