

FROM node:16.20-slim


WORKDIR /app/darlsco/src

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 4510

CMD [ "npm","start" ]
