# Base Image for the current Node LTS version
FROM node:14-alpine as development

WORKDIR /usr/server

COPY package*.json ./

RUN npm install -g rimraf @nestjs/cli
RUN npm install 

COPY . .

#################################

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/server

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/server/dist ./dist

CMD ["node", "dist/main"]