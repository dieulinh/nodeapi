FROM node:12.18.1
ENV APP_DIR=/home/node/app
ENV NODE_ENV=production
RUN mkdir -p $APP_DIR && chown -R node:node $APP_DIR

WORKDIR $APP_DIR
user node
COPY --chown=node:node . .

