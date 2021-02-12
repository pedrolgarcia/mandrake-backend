FROM node:lts-alpine

WORKDIR /home/dev/app

COPY package.json yarn.* ./

COPY . /home/dev/app/

RUN chown -R node:node /home/dev/app

RUN yarn

USER node

EXPOSE 3333

ENTRYPOINT ["yarn", "migrate"]