FROM node:16-bullseye-slim As development

WORKDIR /usr/src/app

COPY cloudvisor-quotes/package*.json ./

RUN npm install --only=development

COPY cloudvisor-quotes/ .

RUN npm run build

FROM node:16-bullseye-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY cloudvisor-quotes/package*.json ./

RUN npm install --only=production

COPY cloudvisor-quotes/ .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
