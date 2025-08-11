# Build
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Serve (Caddy)
FROM caddy:2.10.0-alpine

ENV DOMAIN=liamthorne.dev

COPY --from=build /app/build /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile
