FROM node:16:alphine
WORKDIR /modules-api

COPY ./src /modules-api/src
COPY package.json /modules-api
COPY package-lock.json /modules-api
RUN npm install