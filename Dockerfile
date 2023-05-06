FROM node:19-alpine

WORKDIR /Proyecto Gestión-Configuración

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","start"]
