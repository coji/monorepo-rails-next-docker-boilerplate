FROM node:14-alpine

WORKDIR /front

RUN npm i -g pnpm

COPY ../front/package.json /front/package.json
COPY ../front/pnpm-lock.yaml /front/pnpm-lock.yaml
RUN pnpm fetch

COPY ../front ./front
RUN pnpm i
