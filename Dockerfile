
# http://passguardian.com/
# https://github.com/lkoba/shamir.js # este usa el dockerfile
# https://iancoleman.io/shamir/
# https://github.com/lkoba/shamir



# FROM ubuntu:20.04
# RUN apt-get update && apt-get install -y \
#     ssss \
#  && apt-get clean && rm -rf /var/lib/apt/lists/*

FROM node:18

RUN mkdir /app
WORKDIR /app

RUN yarn add https://github.com/lkoba/shamir.js

COPY run.js /app

ENTRYPOINT ["node", "run.js"]
