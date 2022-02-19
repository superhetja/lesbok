FROM node:16 AS development

WORKDIR /api
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install
COPY . ./