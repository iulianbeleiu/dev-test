FROM node:12-alpine as builder

COPY package.json yarn.lock ./

RUN npm install && mkdir /react-nginx && mv ./node_modules ./react-nginx

WORKDIR /react-nginx

COPY . .

RUN npm run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /react-nginx/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]