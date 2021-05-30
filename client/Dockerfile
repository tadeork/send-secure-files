FROM node:10-slim AS client

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node package*.json ./

COPY --chown=node . .

RUN npm i

ENV REACT_APP_BASE_URL=http://localhost:3200/api

EXPOSE 3000

CMD ["npm", "start"]
