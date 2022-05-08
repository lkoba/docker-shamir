FROM node:18

RUN mkdir /app
WORKDIR /app

RUN yarn add https://github.com/lkoba/shamir.js

COPY run.js /app

ENTRYPOINT ["node", "run.js"]
