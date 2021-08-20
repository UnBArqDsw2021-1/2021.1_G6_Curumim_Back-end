FROM node:10.16.3


RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN yarn install


EXPOSE 3333

CMD ["yarn", "start"]