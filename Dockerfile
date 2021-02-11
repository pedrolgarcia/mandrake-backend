FROM node:lts-alpine

WORKDIR /home/dev/app

COPY package.json yarn.* ./

RUN apk add --no-cache git

COPY . /home/dev/app/

RUN chown -R node:node /home/dev/app

RUN yarn

USER node

EXPOSE 3333

RUN node --harmony_proxies ace migration:run --force

ENTRYPOINT ["yarn", "dev"]