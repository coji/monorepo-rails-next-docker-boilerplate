FROM node:14-buster-slim

ENV ROOT="/front"
WORKDIR ${ROOT}

RUN npm i -g pnpm

COPY ../front/package.json /front/package.json
COPY ../front/pnpm-lock.yaml /front/pnpm-lock.yaml
RUN pnpm i

COPY ../front ./front
