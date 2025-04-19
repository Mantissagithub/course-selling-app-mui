#first build the react app
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npx vite build

#second serve the react app with some server like nginx
FROM nginx:1.27.0

WORKDIR /app

COPY --from=build app/dist /usr/share/nginx/html

