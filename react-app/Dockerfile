# syntax=docker/dockerfile:1
FROM node:18-alpine as builder

WORKDIR /app

COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build

# copy files from build images into nginx image
FROM nginx
EXPOSE 3000
COPY COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf


CMD ["npm", "start"]