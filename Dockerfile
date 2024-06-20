FROM node:18.18-alpine3.18 AS build


WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build


# Use the latest version of the official Nginx image as the base image
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/front-reto/browser /usr/share/nginx/html
