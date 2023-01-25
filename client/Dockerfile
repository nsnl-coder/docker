# syntax=docker/dockerfile:1
FROM node:lts-alpine3.16 as builder

WORKDIR /app

RUN npm i -g npm@9.3.1
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

# copy files from build images into nginx image
FROM nginx
EXPOSE 5173
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf